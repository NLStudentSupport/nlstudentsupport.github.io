var searchInput = document.getElementById('institution-search');
var institutionList = document.getElementById('institution-list');
var noResults = document.getElementById('no-results');
var resultsCount = document.getElementById('results-count');
var servicesSection = document.getElementById('services-section');
var serviceDetailSection = document.getElementById('service-detail');
var nationalResourcesSection = document.getElementById('national-resources');
var filtersSidebar = document.getElementById('filters-sidebar');
var mobileFilterBtn = document.getElementById('mobile-filter-btn');
var clearFiltersBtn = document.getElementById('clear-filters');

var selectedInstitution = null;
var currentSearch = '';

var typeLabels = {
  research: 'Research',
  applied: 'Applied Sciences',
  arts: 'Arts & Music',
  specialized: 'Specialized'
};

document.addEventListener('DOMContentLoaded', function() {
  updateTypeCounts();
  renderInstitutionList();
  renderNationalResources();
  setupFilters();
  setupSearch();
  setupMobileFilter();
  setupAlertBanner();
  setupTabs();
});

function setupTabs() {
  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var targetTab = btn.dataset.tab;

      // Update button states
      tabBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');

      // Update content visibility
      tabContents.forEach(function(content) {
        if (content.id === targetTab) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });

      // Scroll to the content
      var targetElement = document.getElementById(targetTab);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function setupAlertBanner() {
  var alertBanner = document.getElementById('alert-banner');
  var alertClose = document.getElementById('alert-close');

  if (!alertBanner || !alertClose) return;

  // Check if banner was previously dismissed
  if (localStorage.getItem('alertBannerDismissed') === 'true') {
    alertBanner.classList.add('hidden');
    return;
  }

  alertClose.addEventListener('click', function() {
    alertBanner.classList.add('hidden');
    localStorage.setItem('alertBannerDismissed', 'true');
  });
}

function updateTypeCounts() {
  var counts = { research: 0, applied: 0, arts: 0, specialized: 0 };

  Object.values(universities).forEach(function(uni) {
    if (counts[uni.type] !== undefined) {
      counts[uni.type]++;
    }
  });

  var researchCount = document.getElementById('type-count-research');
  var appliedCount = document.getElementById('type-count-applied');
  var artsCount = document.getElementById('type-count-arts');
  var specializedCount = document.getElementById('type-count-specialized');

  if (researchCount) researchCount.textContent = counts.research;
  if (appliedCount) appliedCount.textContent = counts.applied;
  if (artsCount) artsCount.textContent = counts.arts;
  if (specializedCount) specializedCount.textContent = counts.specialized;
}

function setupFilters() {
  var typeCheckboxes = document.querySelectorAll('input[name="type"]');
  var serviceCheckboxes = document.querySelectorAll('input[name="service"]');

  typeCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', renderInstitutionList);
  });

  serviceCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', renderInstitutionList);
  });

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', function() {
      typeCheckboxes.forEach(function(cb) { cb.checked = true; });
      serviceCheckboxes.forEach(function(cb) { cb.checked = false; });
      searchInput.value = '';
      currentSearch = '';
      renderInstitutionList();
    });
  }
}

function setupSearch() {
  searchInput.addEventListener('input', function(e) {
    currentSearch = e.target.value.toLowerCase().trim();
    renderInstitutionList();
  });
}

function setupMobileFilter() {
  if (mobileFilterBtn) {
    mobileFilterBtn.addEventListener('click', function() {
      filtersSidebar.classList.toggle('active');
      mobileFilterBtn.textContent = filtersSidebar.classList.contains('active') ? 'Hide filters' : 'Filter options';
    });
  }
}

function getSelectedTypes() {
  var selected = [];
  document.querySelectorAll('input[name="type"]:checked').forEach(function(cb) {
    selected.push(cb.value);
  });
  return selected;
}

function getSelectedServices() {
  var selected = [];
  document.querySelectorAll('input[name="service"]:checked').forEach(function(cb) {
    selected.push(cb.value);
  });
  return selected;
}

function getFilteredInstitutions() {
  var selectedTypes = getSelectedTypes();
  var selectedServices = getSelectedServices();
  var results = [];

  Object.entries(universities).forEach(function(entry) {
    var id = entry[0];
    var uni = entry[1];

    // Check search
    var searchStr = (uni.name + ' ' + (uni.shortName || '')).toLowerCase();
    var matchesSearch = !currentSearch || searchStr.indexOf(currentSearch) !== -1;
    if (!matchesSearch) return;

    // Check type filter
    var matchesType = selectedTypes.length === 0 || selectedTypes.indexOf(uni.type) !== -1;
    if (!matchesType) return;

    // Check service filter (if any selected, must have that service)
    if (selectedServices.length > 0) {
      var hasService = selectedServices.some(function(service) {
        return uni.services && uni.services[service];
      });
      if (!hasService) return;
    }

    results.push({
      id: id,
      name: uni.name,
      shortName: uni.shortName,
      type: uni.type
    });
  });

  // Sort alphabetically by name
  results.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });

  return results;
}

function renderInstitutionList() {
  var filtered = getFilteredInstitutions();
  var html = '';

  filtered.forEach(function(uni) {
    html += renderInstitutionItem(uni);
  });

  institutionList.innerHTML = html;

  // Update results count
  var total = Object.keys(universities).length;
  if (resultsCount) {
    resultsCount.textContent = filtered.length + ' of ' + total + ' institutions';
  }

  // Show/hide no results message
  if (filtered.length === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
  }

  // Add click handlers
  institutionList.querySelectorAll('.institution-item').forEach(function(item) {
    item.addEventListener('click', function() {
      selectInstitution(item.dataset.id);
    });
  });

  // Restore selected state
  if (selectedInstitution) {
    var selectedItem = institutionList.querySelector('[data-id="' + selectedInstitution.id + '"]');
    if (selectedItem) {
      selectedItem.classList.add('selected');
    }
  }
}

function renderInstitutionItem(uni) {
  var selectedClass = selectedInstitution && selectedInstitution.id === uni.id ? ' selected' : '';
  var typeClass = ' type-' + uni.type;
  var typeLabel = typeLabels[uni.type] || uni.type;
  var badgeText = uni.shortName || uni.name.substring(0, 3).toUpperCase();

  var html = '<div class="institution-item' + selectedClass + typeClass + '" data-id="' + uni.id + '">';
  html += '<div class="inst-info">';
  html += '<span class="inst-badge">' + badgeText + '</span>';
  html += '<span class="inst-name">' + uni.name + '</span>';
  html += '</div>';
  html += '<span class="inst-type">' + typeLabel + '</span>';
  html += '<span class="inst-arrow">&#8250;</span>';
  html += '</div>';
  return html;
}

function selectInstitution(uniId) {
  var prevSelected = institutionList.querySelector('.institution-item.selected');
  if (prevSelected) {
    prevSelected.classList.remove('selected');
  }

  selectedInstitution = { id: uniId };
  Object.assign(selectedInstitution, universities[uniId]);

  var newSelected = institutionList.querySelector('[data-id="' + uniId + '"]');
  if (newSelected) {
    newSelected.classList.add('selected');
  }

  renderServiceCategories();
  hideServiceDetail();

  setTimeout(function() {
    servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function renderServiceCategories() {
  var services = selectedInstitution.services;
  var uni = selectedInstitution;
  var typeLabel = typeLabels[uni.type] || uni.type;

  var html = '<div class="services-header">';
  html += '<div class="services-info">';
  html += '<div class="services-type">' + typeLabel + '</div>';
  html += '<h2>' + uni.name + '</h2>';
  html += '<p>Select a support service</p>';
  html += '</div>';
  html += '<a href="' + uni.website + '" target="_blank" rel="noopener noreferrer" class="website-link">Visit website</a>';
  html += '</div>';

  // Show contact person if available
  if (uni.contactPerson) {
    html += '<div class="contact-person-card">';
    html += '<div class="contact-person-header">Contact Person</div>';
    html += '<div class="contact-person-name">' + uni.contactPerson.name + '</div>';
    if (uni.contactPerson.role) {
      html += '<div class="contact-person-role">' + uni.contactPerson.role + '</div>';
    }
    if (uni.contactPerson.email) {
      html += '<div class="contact-person-email"><a href="mailto:' + uni.contactPerson.email + '">' + uni.contactPerson.email + '</a></div>';
    }
    if (uni.contactPerson.phone) {
      html += '<div class="contact-person-phone"><a href="tel:' + uni.contactPerson.phone + '">' + uni.contactPerson.phone + '</a></div>';
    }
    html += '</div>';
  }

  html += '<div class="service-grid">';

  Object.entries(serviceCategories).forEach(function(entry) {
    var key = entry[0];
    var category = entry[1];
    var available = services[key];
    var unavailableClass = available ? '' : ' unavailable';

    html += '<div class="service-card' + unavailableClass + '" data-service="' + key + '"';
    if (!available) {
      html += ' title="Not available"';
    }
    html += '>';
    html += '<div class="icon">' + category.label + '</div>';
    html += '<h3>' + category.title + '</h3>';
    html += '<p>' + (available ? category.description : 'Not available') + '</p>';
    html += '</div>';
  });

  html += '</div>';
  servicesSection.querySelector('.container').innerHTML = html;
  servicesSection.classList.add('active');

  servicesSection.querySelectorAll('.service-card:not(.unavailable)').forEach(function(card) {
    card.addEventListener('click', function() {
      showServiceDetail(card.dataset.service);
    });
  });
}

function showServiceDetail(serviceKey) {
  var service = selectedInstitution.services[serviceKey];
  var category = serviceCategories[serviceKey];

  var html = '<button class="back-button" onclick="hideServiceDetail()">Back to services</button>';
  html += '<div class="detail-card">';
  html += '<h2>' + service.title;
  if (service.freeOfCharge) {
    html += '<span class="badge badge-free">Free</span>';
  }
  html += '</h2>';
  html += '<p class="description">' + (service.description || category.description) + '</p>';

  if (service.url || service.email || service.phone) {
    if (service.url) {
      html += '<div class="info-row">';
      html += '<span class="info-label">Website</span>';
      html += '<span class="info-value"><a href="' + service.url + '" target="_blank" rel="noopener noreferrer">' + service.url + '</a></span>';
      html += '</div>';
    }
    if (service.email) {
      html += '<div class="info-row">';
      html += '<span class="info-label">Email</span>';
      html += '<span class="info-value"><a href="mailto:' + service.email + '">' + service.email + '</a></span>';
      html += '</div>';
    }
    if (service.phone) {
      html += '<div class="info-row">';
      html += '<span class="info-label">Phone</span>';
      html += '<span class="info-value"><a href="tel:' + service.phone + '">' + service.phone + '</a></span>';
      html += '</div>';
    }
  }

  if (service.url) {
    html += '<a href="' + service.url + '" target="_blank" rel="noopener noreferrer" class="visit-button">Visit Official Page</a>';
  }

  html += '</div>';

  serviceDetailSection.querySelector('.container').innerHTML = html;
  serviceDetailSection.classList.add('active');
  servicesSection.classList.remove('active');

  serviceDetailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideServiceDetail() {
  serviceDetailSection.classList.remove('active');
  servicesSection.classList.add('active');
}

function renderNationalResources() {
  var html = '<h2>National Support Resources</h2>';
  html += '<p>Available to all students in the Netherlands</p>';
  html += '<div class="resources-grid">';

  var sorted = Object.entries(nationalResources).sort(function(a, b) {
    return a[1].priority - b[1].priority;
  });

  sorted.forEach(function(entry) {
    var key = entry[0];
    var resource = entry[1];
    var cardClass = '';
    if (key === 'emergency') cardClass = ' emergency';
    else if (key === 'suicidePrevention') cardClass = ' crisis';

    html += '<div class="resource-card' + cardClass + '">';
    html += '<h3>' + resource.title + '</h3>';
    if (resource.number) {
      html += '<div class="phone">' + resource.number + '</div>';
    }
    html += '<p>' + resource.description + '</p>';
    if (resource.website) {
      html += '<a href="' + resource.website + '" target="_blank" rel="noopener noreferrer">Visit website</a>';
    }
    html += '</div>';
  });

  html += '</div>';
  nationalResourcesSection.querySelector('.container').innerHTML = html;
}

window.hideServiceDetail = hideServiceDetail;
