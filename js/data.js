const universities = {
  // ==========================================
  // RESEARCH UNIVERSITIES (14)
  // ==========================================

  "uva": {
    name: "University of Amsterdam",
    shortName: "UvA",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.uva.nl",
    contactPerson: {
      name: "Student Support Team",
      role: "Student Services",
      email: "studentsupport@uva.nl"
    },
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Free psychological support for study-related and personal problems",
        url: "https://student.uva.nl/en/topics/uva-psychologists",
        email: "studentenpsychologen@uva.nl",
        phone: "+31 20 525 9297",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support for personal circumstances affecting studies",
        url: "https://student.uva.nl/en/topics/conditions-for-support-by-student-counsellors"
      },
      studyAdvisor: {
        title: "Study Guidance & Counselling",
        description: "Academic guidance and study planning support",
        url: "https://student.uva.nl/en/categories/study-guidance-and-counselling"
      },
      disability: {
        title: "Studying with a Disability",
        description: "Support for students with disabilities or chronic conditions",
        url: "https://student.uva.nl/en/categories/studying-with-a-disability"
      },
      financial: {
        title: "Financial Support",
        description: "Information about financial assistance and emergency funds",
        url: "https://student.uva.nl/en/categories/grants-and-financial-aid"
      },
      wellbeing: {
        title: "Mental Health & Wellbeing",
        description: "Mental health resources and support",
        url: "https://student.uva.nl/en/topics/mental-health"
      },
      crisis: {
        title: "Crisis Support",
        description: "Immediate help in crisis situations - call 113 or visit 113.nl",
        url: "https://student.uva.nl/en/categories/health-and-well-being"
      }
    }
  },

  "vu": {
    name: "Vrije Universiteit Amsterdam",
    shortName: "VU",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.vu.nl",
    contactPerson: {
      name: "VU Student Desk",
      role: "Central Student Support",
      email: "studentendesk@vu.nl"
    },
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological counselling and support",
        url: "https://vu.nl/en/student/contact-student-guidance-and-support/student-psychological-counsellor",
        email: "psychologists@vu.nl",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Help with personal circumstances and regulations",
        url: "https://vu.nl/en/student/contact-student-guidance-and-support/student-counsellor",
        email: "studentendecanen.soz@vu.nl"
      },
      studyAdvisor: {
        title: "Study Advisers",
        description: "Academic guidance per faculty",
        url: "https://vu.nl/en/student/contact-student-guidance-and-support"
      },
      disability: {
        title: "Studying with a Disability",
        description: "Support and facilities for students with disabilities",
        url: "https://vu.nl/en/student/studying-with-a-disability"
      },
      financial: {
        title: "Financial Support",
        description: "Emergency fund and financial advice",
        url: "https://vu.nl/en/student/finances/financial-support"
      },
      wellbeing: {
        title: "Student Wellbeing",
        description: "General wellbeing resources and support",
        url: "https://vu.nl/en/student/student-wellbeing"
      },
      crisis: {
        title: "Crisis Support",
        description: "Guidance and support in crisis situations",
        url: "https://vu.nl/en/student/student-wellbeing/guidance-and-support-crises"
      }
    }
  },

  "uu": {
    name: "Utrecht University",
    shortName: "UU",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.uu.nl",
    contactPerson: {
      name: "Student Affairs Office",
      role: "Student Guidance",
      email: "studentservices@uu.nl"
    },
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological assistance for students",
        url: "https://students.uu.nl/en/support-and-development/contact/student-psychologist",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://students.uu.nl/en/support-and-development/contact/student-counsellor"
      },
      studyAdvisor: {
        title: "Study Advisers",
        description: "Academic planning and guidance",
        url: "https://students.uu.nl/en/support-and-development/whom-to-contact-for-guidance"
      },
      disability: {
        title: "Disability Support",
        description: "Facilities and support for students with functional disabilities",
        url: "https://students.uu.nl/en/support-and-development/support/studying-with-a-disability",
        email: "disability@uu.nl"
      },
      financial: {
        title: "Financial Support",
        description: "Financial assistance and advice",
        url: "https://students.uu.nl/en/support-and-development/support/studying-with-a-disability/financial-provisions"
      },
      wellbeing: {
        title: "Student Wellbeing",
        description: "Wellbeing resources and mental health support",
        url: "https://www.uu.nl/en/masters/general-information/studying-at-utrecht-university/student-counselling"
      }
    }
  },

  "leiden": {
    name: "Leiden University",
    shortName: "Leiden",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.universiteitleiden.nl",
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological support and counselling",
        url: "https://www.student.universiteitleiden.nl/en/support/health-and-well-being/where-to-turn/student-psychologists",
        email: "psychologen@sea.leidenuniv.nl",
        freeOfCharge: true
      },
      counsellor: {
        title: "Where to Turn",
        description: "Who to contact for personal circumstances and study delay",
        url: "https://www.student.universiteitleiden.nl/en/support/health-and-well-being/where-to-turn"
      },
      studyAdvisor: {
        title: "Study Advisers",
        description: "Academic guidance and planning (via faculty)",
        url: "https://www.student.universiteitleiden.nl/en/your-study-programme/contact-and-advice"
      },
      disability: {
        title: "Disability Support (Fenestra)",
        description: "Support for students with disabilities",
        url: "https://www.student.universiteitleiden.nl/en/support/study-support/studying-with-a-disability"
      },
      financial: {
        title: "Financial Support",
        description: "Financial aid and emergency funds",
        url: "https://www.student.universiteitleiden.nl/en/support/money-matters"
      },
      wellbeing: {
        title: "Mental Well-being",
        description: "General wellbeing resources",
        url: "https://www.student.universiteitleiden.nl/en/support/health-and-well-being"
      }
    }
  },

  "eur": {
    name: "Erasmus University Rotterdam",
    shortName: "EUR",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.eur.nl",
    contactPerson: {
      name: "EUR Student Desk",
      role: "Student Support Services",
      email: "studentdesk@eur.nl"
    },
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological counselling and support",
        url: "https://www.eur.nl/en/education/practical-matters/advice-counselling/student-psychologists",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.eur.nl/en/education/practical-matters/advice-counselling/student-counsellors"
      },
      studyAdvisor: {
        title: "Study Advisers",
        description: "Academic guidance and planning (via faculty)",
        url: "https://www.eur.nl/en/education/practical-matters/advice-counselling"
      },
      disability: {
        title: "Studying with Functional Impairment",
        description: "Support for students with disabilities or chronic conditions",
        url: "https://www.eur.nl/en/education/practical-matters/advice-counselling/studying-functional-impairment"
      },
      financial: {
        title: "Financial Aid",
        description: "Financial advice and emergency funds",
        url: "https://www.eur.nl/en/education/practical-matters/financial-matters/scholarships-grants/financial-aid"
      },
      wellbeing: {
        title: "Student Wellbeing Platform",
        description: "Wellbeing resources, the Living Room, and the ROOM app",
        url: "https://www.eur.nl/en/education/study-rotterdam/student-wellbeing"
      }
    }
  },

  "tudelft": {
    name: "Delft University of Technology",
    shortName: "TU Delft",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.tudelft.nl",
    contactPerson: {
      name: "Student Counselling Team",
      role: "Education & Student Affairs",
      email: "studentcounselling@tudelft.nl",
      phone: "+31 15 278 5656"
    },
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological support and counselling",
        url: "https://www.tudelft.nl/en/student/my-study-me/counselling/psychologists",
        email: "psychologen@tudelft.nl",
        freeOfCharge: true
      },
      counsellor: {
        title: "Academic Counsellors",
        description: "Support with personal circumstances and regulations",
        url: "https://www.tudelft.nl/en/student/my-study-me/counselling/academic-counsellors"
      },
      studyAdvisor: {
        title: "Faculty Counselling",
        description: "Academic guidance and planning",
        url: "https://www.tudelft.nl/en/student/my-study-me/counselling"
      },
      disability: {
        title: "Disability Support (Horizon)",
        description: "Support for students with disabilities",
        url: "https://www.tudelft.nl/en/student/my-study-me/counselling/studying-with-a-disability",
        email: "horizon-esa@tudelft.nl"
      },
      financial: {
        title: "Student Support Fund",
        description: "Financial advice and emergency support",
        url: "https://www.tudelft.nl/en/student/my-study-me/rules-guidelines-and-participation/student-support-fund-scheme"
      },
      wellbeing: {
        title: "MoTiv - Student Wellbeing",
        description: "Mental health and wellbeing resources",
        url: "https://www.tudelft.nl/en/student/my-study-me/counselling/motiv"
      },
      crisis: {
        title: "Emergency & Crisis Support",
        description: "24/7 emergency line and crisis support",
        url: "https://www.tudelft.nl/en/community/social-safety/the-reporting-point/all-student-helplines",
        phone: "+31 15 278 8888"
      }
    }
  },

  "tue": {
    name: "Eindhoven University of Technology",
    shortName: "TU/e",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.tue.nl",
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological support and counselling",
        url: "https://educationguide.tue.nl/guidance-and-development/who-to-contact/student-psychologists",
        email: "student.psychologists@tue.nl",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://educationguide.tue.nl/practical-info/student-guidance/student-counselor/",
        email: "studentcounselors@tue.nl"
      },
      studyAdvisor: {
        title: "Academic Advisors",
        description: "Academic guidance and planning",
        url: "https://educationguide.tue.nl/guidance-and-development/who-to-contact/academic-advisor"
      },
      disability: {
        title: "Extra Support During Studies",
        description: "Support for students with disabilities or chronic conditions",
        url: "https://educationguide.tue.nl/guidance-and-development/extra-support-during-your-studies"
      },
      financial: {
        title: "Student Financial Support",
        description: "Financial advice and assistance",
        url: "https://educationguide.tue.nl/guidance-and-development/funding-from-tue/student-financial-support"
      },
      wellbeing: {
        title: "Student Wellbeing",
        description: "Wellbeing and mental health resources, and where to find support",
        url: "https://educationguide.tue.nl/guidance-and-development/student-wellbeing"
      }
    }
  },

  "utwente": {
    name: "University of Twente",
    shortName: "UT",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.utwente.nl",
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological counselling and support",
        url: "https://www.utwente.nl/en/sgw/support-from-professionals/psychologist-for-students/",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.utwente.nl/en/sgw/support-from-professionals/student-counsellor/",
        email: "student-counsellor@utwente.nl",
        phone: "+31 53 489 2035"
      },
      studyAdvisor: {
        title: "Coaching & Counselling",
        description: "Academic guidance per programme",
        url: "https://www.utwente.nl/en/ces/sacc/coaching-counselling/"
      },
      disability: {
        title: "Disability Support",
        description: "Support for students with disabilities",
        url: "https://www.utwente.nl/en/ces/sacc/personal-circumstances/disability/"
      },
      financial: {
        title: "Financial Support (StOF)",
        description: "Financial advice and emergency funds",
        url: "https://www.utwente.nl/en/sgw/regulations/stof/"
      },
      wellbeing: {
        title: "Student Guidance & Wellbeing (SGW)",
        description: "Wellbeing and mental health resources",
        url: "https://www.utwente.nl/en/sgw/"
      }
    }
  },

  "rug": {
    name: "University of Groningen",
    shortName: "RUG",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.rug.nl",
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological support and counselling",
        url: "https://www.rug.nl/education/student-service-centre/student-psychologists?lang=en",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.rug.nl/education/student-service-centre/student-counsellors?lang=en"
      },
      studyAdvisor: {
        title: "Student Service Centre",
        description: "Academic guidance and support",
        url: "https://www.rug.nl/education/student-service-centre/?lang=en"
      },
      disability: {
        title: "Disability Support",
        description: "Support for students with functional limitations",
        url: "https://www.rug.nl/education/exchange/study-in-groningen/living-in-the-netherlands/studying-with-a-disability?lang=en"
      },
      financial: {
        title: "Financial Wellbeing",
        description: "Financial advice and emergency funds",
        url: "https://www.rug.nl/education/student-service-centre/student-well-being/financial-well-being?lang=en"
      },
      wellbeing: {
        title: "Student Wellbeing",
        description: "Wellbeing and mental health resources",
        url: "https://www.rug.nl/education/why-ug/student-wellbeing/?lang=en"
      }
    }
  },

  "ru": {
    name: "Radboud University",
    shortName: "RU",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.ru.nl",
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological support and counselling",
        url: "https://www.ru.nl/en/students/wellbeing/student-support/counsellors/student-psychologist",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.ru.nl/en/students/wellbeing/student-support/counsellors/student-counsellor",
        email: "centralstudentdesk@ru.nl",
        phone: "+31 24 361 2345"
      },
      studyAdvisor: {
        title: "Study & Career Counsellor",
        description: "Academic guidance per faculty",
        url: "https://www.ru.nl/en/students/wellbeing/student-support/counsellors/study-and-career-counsellor"
      },
      disability: {
        title: "Disability Support",
        description: "Support for students with disabilities",
        url: "https://www.ru.nl/en/students/wellbeing/student-support/help-with-personal-circumstances/disability"
      },
      financial: {
        title: "Financial Support",
        description: "Financial advice and support for study delay",
        url: "https://www.ru.nl/en/students/wellbeing/student-support/financial-support/for-study-delay"
      },
      wellbeing: {
        title: "Student Wellbeing",
        description: "Wellbeing and mental health resources",
        url: "https://www.ru.nl/en/students/wellbeing/student-support"
      }
    }
  },

  "um": {
    name: "Maastricht University",
    shortName: "UM",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.maastrichtuniversity.nl",
    services: {
      psychologist: {
        title: "UM Psychologists",
        description: "Psychological counselling and support",
        url: "https://www.maastrichtuniversity.nl/study/support/psychological-support",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Guidance",
        description: "Support with personal circumstances",
        url: "https://www.maastrichtuniversity.nl/support/during-your-studies/student-guidance"
      },
      studyAdvisor: {
        title: "Study Advisers",
        description: "Academic guidance per faculty",
        url: "https://www.maastrichtuniversity.nl/support/during-your-studies/student-guidance/study-advisers"
      },
      disability: {
        title: "Studying with a Disability",
        description: "Support for students with disabilities",
        url: "https://www.maastrichtuniversity.nl/studeren/support/studying-disability",
        email: "disability@maastrichtuniversity.nl",
        phone: "+31 43 388 5212"
      },
      financial: {
        title: "Student Support Fund",
        description: "Financial support for study delays",
        url: "https://www.maastrichtuniversity.nl/study/admission-enrolment/financing-your-studies/financial-support-study-delays-um-student-support"
      },
      wellbeing: {
        title: "Student Wellbeing",
        description: "Wellbeing and mental health resources",
        url: "https://www.maastrichtuniversity.nl/wellbeing-and-support"
      }
    }
  },

  "tilburg": {
    name: "Tilburg University",
    shortName: "Tilburg",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.tilburguniversity.edu",
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological support and counselling",
        url: "https://www.tilburguniversity.edu/students/tutoring/psychologist",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Deans",
        description: "Support with personal circumstances",
        url: "https://www.tilburguniversity.edu/students/mentally-fit/tutoring/deans-students",
        email: "studentendecaan@tilburguniversity.edu"
      },
      studyAdvisor: {
        title: "Student Advice & Counseling",
        description: "Academic guidance per programme",
        url: "https://www.tilburguniversity.edu/students/tutoring"
      },
      disability: {
        title: "Disability Support",
        description: "Support for students with disabilities",
        url: "https://www.tilburguniversity.edu/students/studying/study-progress/circumstances/disabled"
      },
      financial: {
        title: "Financial Support & Funds",
        description: "Financial advice and emergency funds",
        url: "https://www.tilburguniversity.edu/students/administration/funds"
      },
      wellbeing: {
        title: "Mentally Fit",
        description: "Mental health and wellbeing resources",
        url: "https://www.tilburguniversity.edu/students/mentally-fit"
      },
      crisis: {
        title: "Helpline",
        description: "Daily crisis support line (08:00-23:00)",
        url: "https://www.tilburguniversity.edu/form/need-help",
        phone: "+31 13 466 2115"
      }
    }
  },

  "wur": {
    name: "Wageningen University & Research",
    shortName: "WUR",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.wur.nl",
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological support and counselling",
        url: "https://www.wur.nl/en/education/studying-wageningen/support-and-wellbeing",
        email: "studentpsychologists@wur.nl",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Deans",
        description: "Support with personal circumstances",
        url: "https://www.wur.nl/en/education/studying-wageningen/support-and-wellbeing",
        email: "studentdean@wur.nl",
        phone: "0317-483618"
      },
      studyAdvisor: {
        title: "Study Advisers",
        description: "Academic guidance per programme",
        url: "https://www.wur.nl/en/education/studying-wageningen/support-and-wellbeing"
      },
      disability: {
        title: "Studying with a Disability",
        description: "Support for students with disabilities",
        url: "https://servicenow.wur.nl/esc?id=kb_article&sysparm_article=KB0017078"
      },
      financial: {
        title: "Financial Support (FOS)",
        description: "Financial advice and assistance",
        url: "https://www.wur.nl/en/education/studying-wageningen/support-and-wellbeing"
      },
      wellbeing: {
        title: "Support & Wellbeing",
        description: "Wellbeing and mental health resources",
        url: "https://www.wur.nl/en/education/studying-wageningen/support-and-wellbeing"
      }
    }
  },

  "ou": {
    name: "Open University",
    shortName: "OU",
    type: "research",
    lastVerified: "2026-08-07",
    website: "https://www.ou.nl",
    services: {
      counsellor: {
        title: "Student Support",
        description: "General student support and guidance",
        url: "https://www.ou.nl/direct-contact"
      },
      studyAdvisor: {
        title: "Study Advice",
        description: "Academic guidance and planning",
        url: "https://www.ou.nl/aanvragen-van-studieadvies"
      },
      disability: {
        title: "Studying with a Disability (Drempelsweg)",
        description: "Support and facilities for students with disabilities",
        url: "https://www.ou.nl/studeren-met-een-functiebeperking",
        email: "drempelsweg@ou.nl",
        phone: "+31 45 576 2888"
      },
      wellbeing: {
        title: "Contact & Support",
        description: "General support and wellbeing resources",
        url: "https://www.ou.nl/contact"
      }
    }
  },

  // ==========================================
  // UNIVERSITIES OF APPLIED SCIENCES (HBO)
  // ==========================================

  "hva": {
    name: "Amsterdam University of Applied Sciences",
    shortName: "HvA",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.hva.nl",
    contactPerson: {
      name: "HvA Student Support",
      role: "Student Services",
      email: "studentsupport@hva.nl"
    },
    services: {
      psychologist: {
        title: "Student Support",
        description: "Psychological support via GGD Amsterdam",
        url: "https://www.amsterdamuas.com/study/study-choice/life-at-auas/support",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.amsterdamuas.com/study/study-choice/life-at-auas/support"
      },
      studyAdvisor: {
        title: "Study Advisers",
        description: "Academic guidance per programme",
        url: "https://www.amsterdamuas.com/study/study-choice/life-at-auas/support"
      },
      disability: {
        title: "Disability Support",
        description: "Support for students with disabilities",
        url: "https://www.amsterdamuas.com/study/study-choice/life-at-auas/support"
      },
      wellbeing: {
        title: "Student Support",
        description: "General support and wellbeing",
        url: "https://www.amsterdamuas.com/study/study-choice/life-at-auas/support"
      }
    }
  },

  "hu": {
    name: "HU University of Applied Sciences Utrecht",
    shortName: "HU",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.hu.nl",
    services: {
      psychologist: {
        title: "HU Helps - Mental Health",
        description: "Mental health support and resources",
        url: "https://husite.nl/hu-helps-en/study-to-the-best-of-your-abilities/dealing-with-mental-health-issues/",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.internationalhu.com/student-support-and-guidance",
        email: "decanaat@hu.nl"
      },
      studyAdvisor: {
        title: "Study Support",
        description: "Academic guidance and support",
        url: "https://husite.nl/hu-helps-en/study-support/studying-and-mental-or-physical-impediments/"
      },
      disability: {
        title: "Study with Impediments",
        description: "Support for students with disabilities",
        url: "https://husite.nl/hu-helps-en/study-support/studying-and-mental-or-physical-impediments/"
      },
      wellbeing: {
        title: "Student Support Centre",
        description: "General support and wellbeing",
        url: "https://www.internationalhu.com/student-support-and-guidance",
        email: "studentsupportcentre@hu.nl",
        phone: "088 4813322"
      }
    }
  },

  "hr": {
    name: "Rotterdam University of Applied Sciences",
    shortName: "HR",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.hogeschoolrotterdam.nl",
    services: {
      psychologist: {
        title: "Student Support",
        description: "Psychological support and counselling",
        url: "https://www.rotterdamuas.com/about/contact/student-support/",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.rotterdamuas.com/go/Study-Help/my-study/student-assistence/student-counsellor/"
      },
      studyAdvisor: {
        title: "Study Advisers",
        description: "Academic guidance",
        url: "https://www.rotterdamuas.com/about/contact/student-support/"
      },
      disability: {
        title: "Disability Support",
        description: "Support for students with disabilities",
        url: "https://www.rotterdamuas.com/go/study-help/target-groups/disability/"
      },
      wellbeing: {
        title: "Student Services",
        description: "General support and wellbeing",
        url: "https://www.rotterdamuas.com/about/contact/student-support/"
      }
    }
  },

  "thuas": {
    name: "The Hague University of Applied Sciences",
    shortName: "THUAS",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.thuas.com",
    services: {
      psychologist: {
        title: "Student Counsellor & Psychologist",
        description: "Psychological support and counselling",
        url: "https://www.thuas.com/study-choice/support-during-your-study/support-student-counsellor",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.thuas.com/study-choice/support-during-your-study/support-student-counsellor",
        email: "studentsupport@hhs.nl"
      },
      studyAdvisor: {
        title: "Study Support",
        description: "Academic guidance",
        url: "https://www.thuas.com/study-choice/support-during-your-study"
      },
      disability: {
        title: "Disability Support",
        description: "Support for students with disabilities",
        url: "https://www.thuas.com/study-choice/support-during-your-study/studying-disability-or-special-circumstances"
      },
      wellbeing: {
        title: "Support During Your Study",
        description: "General support and wellbeing",
        url: "https://www.thuas.com/study-choice/support-during-your-study"
      }
    }
  },

  "fontys": {
    name: "Fontys University of Applied Sciences",
    shortName: "Fontys",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.fontys.nl",
    services: {
      psychologist: {
        title: "Fontys Helps",
        description: "Psychological support and counselling",
        url: "https://www.fontys.nl/en/Fontys-Helps.htm",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.fontys.nl/en/Fontys-Helps.htm",
        email: "studentendecanen@fontys.nl",
        phone: "+31 8 85080000"
      },
      studyAdvisor: {
        title: "Study Career Advisors",
        description: "Academic guidance",
        url: "https://www.fontys.nl/en/Fontys-Helps.htm"
      },
      disability: {
        title: "Studying with a Disability",
        description: "Support for students with disabilities",
        url: "https://www.fontys.nl/en/Fontys-Helps.htm"
      },
      wellbeing: {
        title: "Fontys Helps",
        description: "General support and wellbeing",
        url: "https://www.fontys.nl/en/Fontys-Helps.htm"
      }
    }
  },

  "han": {
    name: "HAN University of Applied Sciences",
    shortName: "HAN",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.han.nl",
    services: {
      psychologist: {
        title: "Student Services",
        description: "Psychological support and counselling",
        url: "https://www.hanuniversity.com/en/study-and-living/studying-at-han/student-services/",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.hanuniversity.com/en/study-and-living/studying-at-han/student-services/"
      },
      studyAdvisor: {
        title: "Study Coach",
        description: "Academic guidance",
        url: "https://www.hanuniversity.com/en/study-and-living/studying-at-han/student-services/"
      },
      disability: {
        title: "Special Circumstances",
        description: "Support for students with disabilities",
        url: "https://www.hanuniversity.com/en/study-and-living/studying-at-han/student-services/special-circumstances/"
      },
      wellbeing: {
        title: "Student Services",
        description: "General support and wellbeing",
        url: "https://www.hanuniversity.com/en/study-and-living/studying-at-han/student-services/"
      }
    }
  },

  "saxion": {
    name: "Saxion University of Applied Sciences",
    shortName: "Saxion",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.saxion.edu",
    services: {
      psychologist: {
        title: "Student Support Services",
        description: "Psychological support and counselling",
        url: "https://www.saxion.edu/studying-in-the-netherlands/services",
        freeOfCharge: true
      },
      counsellor: {
        title: "Service Point",
        description: "Support with personal circumstances",
        url: "https://www.saxion.edu/studying-in-the-netherlands/services/service-point"
      },
      studyAdvisor: {
        title: "Help with Studying",
        description: "Academic guidance",
        url: "https://www.saxion.edu/studying-in-the-netherlands/help-with-studying"
      },
      disability: {
        title: "Studying with Special Needs",
        description: "Support for students with disabilities",
        url: "https://www.saxion.edu/studying-in-the-netherlands/services/studying-with-special-needs"
      },
      wellbeing: {
        title: "Student Services",
        description: "General support and wellbeing",
        url: "https://www.saxion.edu/studying-in-the-netherlands/services"
      }
    }
  },

  "hanze": {
    name: "Hanze University of Applied Sciences",
    shortName: "Hanze",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.hanze.nl",
    services: {
      psychologist: {
        title: "Hanze Student Support (HSS)",
        description: "Psychological support and counselling",
        url: "https://www.hanze.nl/en/study/student-support/hss",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Support",
        description: "Support with personal circumstances",
        url: "https://www.hanze.nl/en/study/student-support"
      },
      studyAdvisor: {
        title: "HSS Courses",
        description: "Academic guidance and support courses",
        url: "https://www.hanze.nl/en/study/student-support/hanze-student-support"
      },
      disability: {
        title: "Studying with a Disability",
        description: "Support for students with disabilities",
        url: "https://www.hanze.nl/en/study/student-support/studying-with-a-disability"
      },
      wellbeing: {
        title: "Student Support",
        description: "General support and wellbeing",
        url: "https://www.hanze.nl/en/study/student-support"
      }
    }
  },

  "nhlstenden": {
    name: "NHL Stenden University of Applied Sciences",
    shortName: "NHL Stenden",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.nhlstenden.com",
    services: {
      psychologist: {
        title: "Student Counselling Office",
        description: "Psychological support and counselling",
        url: "https://www.nhlstenden.com/en/practical-information/student-counselling-office",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counselling Office",
        description: "Support with personal circumstances",
        url: "https://www.nhlstenden.com/en/practical-information/student-counselling-office",
        phone: "+31 58 244 1155",
        email: "studentinfo@nhlstenden.com"
      },
      studyAdvisor: {
        title: "Study Support",
        description: "Academic guidance",
        url: "https://www.nhlstenden.com/en/practical-information/student-counselling-office"
      },
      financial: {
        title: "Financial Support Fund",
        description: "Financial assistance",
        url: "https://www.nhlstenden.com/en/about-nhl-stenden/financial-support-fund"
      },
      wellbeing: {
        title: "Student Counselling",
        description: "General support and wellbeing",
        url: "https://www.nhlstenden.com/en/practical-information/student-counselling-office"
      }
    }
  },

  "inholland": {
    name: "Inholland University of Applied Sciences",
    shortName: "Inholland",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.inholland.nl",
    services: {
      psychologist: {
        title: "Student Support",
        description: "Psychological support and counselling",
        url: "https://www.inholland.nl/inhollandcom/",
        freeOfCharge: true
      },
      counsellor: {
        title: "Personal Situations Support",
        description: "Support with personal circumstances",
        url: "https://www.inholland.nl/inhollandcom/"
      },
      studyAdvisor: {
        title: "Study Support",
        description: "Academic guidance",
        url: "https://www.inholland.nl/inhollandcom/"
      },
      wellbeing: {
        title: "Student Support",
        description: "General support and wellbeing",
        url: "https://www.inholland.nl/inhollandcom/"
      }
    }
  },

  "avans": {
    name: "Avans University of Applied Sciences",
    shortName: "Avans",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.avans.nl",
    services: {
      psychologist: {
        title: "Personal Support",
        description: "Psychological support and counselling",
        url: "https://www.avans.nl/international/studying/study-at-avans/personal-support/student-counsellor",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellor",
        description: "Support with personal circumstances",
        url: "https://www.avans.nl/international/studying/study-at-avans/personal-support/student-counsellor"
      },
      studyAdvisor: {
        title: "Study Support",
        description: "Academic guidance",
        url: "https://www.avans.nl/international/studying/study-at-avans/personal-support/student-counsellor"
      },
      wellbeing: {
        title: "Personal Support",
        description: "General support and wellbeing",
        url: "https://www.avans.nl/international/studying/study-at-avans/personal-support/student-counsellor"
      }
    }
  },

  "windesheim": {
    name: "Windesheim University of Applied Sciences",
    shortName: "Windesheim",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.windesheim.nl",
    services: {
      psychologist: {
        title: "Student Support",
        description: "Psychological support and counselling",
        url: "https://www.windesheim.com/",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.windesheim.com/"
      },
      studyAdvisor: {
        title: "Study Advisers",
        description: "Academic guidance",
        url: "https://www.windesheim.com/"
      },
      wellbeing: {
        title: "Student Support",
        description: "General support and wellbeing",
        url: "https://www.windesheim.com/"
      }
    }
  },

  "zuyd": {
    name: "Zuyd University of Applied Sciences",
    shortName: "Zuyd",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.zuyd.nl",
    services: {
      psychologist: {
        title: "Student Psychologists",
        description: "Psychological support and counselling",
        url: "https://www.zuyd.nl/en/landingpages/student/i-need-help",
        email: "studentenpsychologen@zuyd.nl",
        freeOfCharge: true
      },
      counsellor: {
        title: "I Need Help",
        description: "Support with personal circumstances",
        url: "https://www.zuyd.nl/en/landingpages/student/i-need-help"
      },
      studyAdvisor: {
        title: "Study Support",
        description: "Academic guidance",
        url: "https://www.zuyd.nl/en/landingpages/student/i-need-help"
      },
      wellbeing: {
        title: "Zuyd LUISTER",
        description: "Peer support and wellbeing",
        url: "https://www.zuyd.nl/en/landingpages/student/i-need-help",
        email: "luister@zuyd.nl"
      }
    }
  },

  "hz": {
    name: "HZ University of Applied Sciences",
    shortName: "HZ",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://hz.nl",
    services: {
      psychologist: {
        title: "Student Counselling",
        description: "Psychological support and counselling",
        url: "https://hz.nl/en/study-information/studying-at-hz/student-counselling",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counselling",
        description: "Support with personal circumstances",
        url: "https://hz.nl/en/study-information/studying-at-hz/student-counselling"
      },
      studyAdvisor: {
        title: "Study Support",
        description: "Academic guidance",
        url: "https://hz.nl/en/study-information/studying-at-hz/student-counselling"
      },
      wellbeing: {
        title: "Student Counselling",
        description: "General support and wellbeing",
        url: "https://hz.nl/en/study-information/studying-at-hz/student-counselling"
      }
    }
  },

  "hsleiden": {
    name: "Leiden University of Applied Sciences",
    shortName: "HS Leiden",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.hsleiden.nl",
    services: {
      psychologist: {
        title: "Student Support",
        description: "Psychological support and counselling",
        url: "https://www.hsleiden.nl/en/further-education/support",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Support",
        description: "Support with personal circumstances",
        url: "https://www.hsleiden.nl/en/further-education/support"
      },
      studyAdvisor: {
        title: "Study Support",
        description: "Academic guidance",
        url: "https://www.hsleiden.nl/en/further-education/support"
      },
      wellbeing: {
        title: "Student Support",
        description: "General support and wellbeing",
        url: "https://www.hsleiden.nl/en/further-education/support"
      }
    }
  },

  "buas": {
    name: "Breda University of Applied Sciences",
    shortName: "BUas",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.buas.nl",
    services: {
      psychologist: {
        title: "Student Wellbeing",
        description: "Psychological support and counselling",
        url: "https://www.buas.nl/en/international-students/study-at-buas/support-need",
        email: "studentcounselling@buas.nl",
        freeOfCharge: true
      },
      counsellor: {
        title: "Support & Need",
        description: "Support with personal circumstances",
        url: "https://www.buas.nl/en/international-students/study-at-buas/support-need"
      },
      studyAdvisor: {
        title: "Study Support",
        description: "Academic guidance",
        url: "https://www.buas.nl/en/international-students/study-at-buas/support-need"
      },
      wellbeing: {
        title: "Student Wellbeing",
        description: "General support and wellbeing",
        url: "https://www.buas.nl/en/international-students/study-at-buas/support-need"
      }
    }
  },

  "aeres": {
    name: "Aeres University of Applied Sciences",
    shortName: "Aeres",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.aeres.nl",
    services: {
      counsellor: {
        title: "Student Support",
        description: "General student support",
        url: "https://www.aeresuas.com/"
      },
      studyAdvisor: {
        title: "Study Advisers",
        description: "Academic guidance",
        url: "https://www.aeresuas.com/"
      },
      wellbeing: {
        title: "Student Life",
        description: "General support and wellbeing",
        url: "https://www.aeresuas.com/"
      }
    }
  },

  "vhl": {
    name: "Van Hall Larenstein University of Applied Sciences",
    shortName: "VHL",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.hvhl.nl",
    services: {
      psychologist: {
        title: "Student Counselling",
        description: "Psychological support and counselling",
        url: "https://www.vhluas.com/study-at-vhl/study-support/",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.vhluas.com/study-at-vhl/velp/counsellors/"
      },
      studyAdvisor: {
        title: "Study Support",
        description: "Academic guidance",
        url: "https://www.vhluas.com/study-at-vhl/study-support/"
      },
      wellbeing: {
        title: "Student Support",
        description: "General support and wellbeing",
        url: "https://www.vhluas.com/study-at-vhl/study-support/"
      }
    }
  },

  // Art & Design Universities
  "artez": {
    name: "ArtEZ University of the Arts",
    shortName: "ArtEZ",
    type: "arts",
    lastVerified: "2026-08-07",
    website: "https://www.artez.nl",
    services: {
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.artez.nl/en/study-at-artez/student-counceling/student-counsellors"
      },
      financial: {
        title: "Financial Arrangements",
        description: "Financial support and arrangements",
        url: "https://www.artez.nl/en/study-at-artez/arrange-your-study/financial-arrangements"
      },
      wellbeing: {
        title: "Student Counseling",
        description: "General support and wellbeing",
        url: "https://www.artez.nl/en/study-at-artez/student-counceling/student-counsellors"
      }
    }
  },

  "dae": {
    name: "Design Academy Eindhoven",
    shortName: "DAE",
    type: "arts",
    lastVerified: "2026-08-07",
    website: "https://www.designacademy.nl",
    services: {
      psychologist: {
        title: "Well-being Support",
        description: "Mental health and wellbeing support",
        url: "https://www.designacademy.nl/page/5870/well-being",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellors",
        description: "Support with personal circumstances",
        url: "https://www.designacademy.nl/page/5858/student-counsellors"
      },
      wellbeing: {
        title: "Student Life & Wellbeing",
        description: "General support and wellbeing",
        url: "https://www.designacademy.nl/page/5847/student-life"
      }
    }
  },

  "rietveld": {
    name: "Gerrit Rietveld Academie",
    shortName: "Rietveld",
    type: "arts",
    lastVerified: "2026-08-07",
    website: "https://rietveldacademie.nl",
    services: {
      psychologist: {
        title: "Student Psychologist",
        description: "Free psychological support",
        url: "https://rietveldacademie.nl/en/page/25525/student-psychologist",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellor",
        description: "Support with personal circumstances",
        url: "https://rietveldacademie.nl/en/page/3168/student-counsellor",
        email: "studentcounselor@rietveldacademie.nl"
      },
      wellbeing: {
        title: "Student Support & Wellbeing",
        description: "General support and wellbeing",
        url: "https://rietveldacademie.nl/en/page/25524/student-support-wellbeing"
      }
    }
  },

  "codarts": {
    name: "Codarts Rotterdam",
    shortName: "Codarts",
    type: "arts",
    lastVerified: "2026-08-07",
    website: "https://www.codarts.nl",
    services: {
      psychologist: {
        title: "Student Life Programme",
        description: "Health and psychological support",
        url: "https://www.codarts.nl/en/student-life/student-life-programme/",
        freeOfCharge: true
      },
      counsellor: {
        title: "Team Around the Artist",
        description: "Comprehensive student support",
        url: "https://www.codarts.nl/en/student-life/student-life-programme/team-around-the-artist/"
      },
      disability: {
        title: "Studying with a Disability",
        description: "Support for students with disabilities",
        url: "https://www.codarts.nl/en/praktische-zaken/praktisch/studying-with-a-disability/"
      },
      financial: {
        title: "Grants and Loans",
        description: "Financial support information",
        url: "https://www.codarts.nl/en/practical-matters/practical/grants-and-loans/"
      },
      wellbeing: {
        title: "Student Life",
        description: "General support and wellbeing",
        url: "https://www.codarts.nl/en/student-life/"
      }
    }
  },

  "cva": {
    name: "Conservatorium van Amsterdam",
    shortName: "CvA",
    type: "arts",
    lastVerified: "2026-08-07",
    website: "https://www.conservatoriumvanamsterdam.nl",
    services: {
      counsellor: {
        title: "Student Counsellor",
        description: "Support with personal circumstances",
        url: "https://www.conservatoriumvanamsterdam.nl/en/study/studying-at-the-cva/health-and-safety/student-counsellor/"
      },
      wellbeing: {
        title: "Health & Safety",
        description: "Health and wellbeing resources",
        url: "https://www.conservatoriumvanamsterdam.nl/en/study/studying-at-the-cva/health-and-safety/health/"
      }
    }
  },

  "che": {
    name: "Christelijke Hogeschool Ede",
    shortName: "CHE",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.che.nl",
    services: {
      wellbeing: {
        title: "StudentenWelzijn",
        description: "Student psychologists, chaplaincy, and the inclusion team",
        url: "https://che.nl/studeren-in-ede/financien-ondersteuning/studentenwelzijn"
      },
      studyAdvisor: {
        title: "Adviseurs Studiesucces and Studentendecanaat",
        description: "Study-success advisers and the student dean's office",
        url: "https://che.nl/studeren-in-ede/financien-ondersteuning/studentenwelzijn"
      }
    }
  },

  "thomasmore": {
    name: "Thomas More Hogeschool",
    shortName: "Thomas More",
    type: "applied",
    lastVerified: "2026-08-07",
    website: "https://www.thomasmorehs.nl",
    services: {
      wellbeing: {
        title: "StudentenWelzijn",
        description: "Student wellbeing support",
        url: "https://www.thomasmorehs.nl/keuzehulp/studentenwelzijn/"
      },
      studyAdvisor: {
        title: "Studying in Rotterdam",
        description: "Study information and support",
        url: "https://www.thomasmorehs.nl/en/studying-in-rotterdam/"
      }
    }
  },

  // ==========================================
  // ADDITIONAL ARTS & MUSIC INSTITUTIONS
  // ==========================================

  "ahk": {
    name: "Amsterdam University of the Arts",
    shortName: "AHK",
    type: "arts",
    lastVerified: "2026-08-07",
    website: "https://www.ahk.nl",
    services: {
      psychologist: {
        title: "Student Coach",
        description: "Coaching for time management, study-related stress, and personal development",
        url: "https://www.ahk.nl/en/study/during-your-study-programme/student-affairs/support-during-your-study/student-coach-1/",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Counsellor",
        description: "Support with personal circumstances",
        url: "https://www.ahk.nl/en/study/during-your-study-programme/student-affairs/support-during-your-study/student-counsellor/"
      },
      wellbeing: {
        title: "Support During Your Study",
        description: "General support and wellbeing resources",
        url: "https://www.ahk.nl/en/study/during-your-study-programme/student-affairs/support-during-your-study/"
      }
    }
  },

  "hku": {
    name: "HKU University of the Arts Utrecht",
    shortName: "HKU",
    type: "arts",
    lastVerified: "2026-08-07",
    website: "https://www.hku.nl",
    services: {
      psychologist: {
        title: "Student Support",
        description: "Psychological support and counselling",
        url: "https://www.hku.nl/en/study-at-hku",
        freeOfCharge: true
      },
      counsellor: {
        title: "Student Affairs",
        description: "Support with personal circumstances",
        url: "https://www.hku.nl/en/study-at-hku"
      },
      wellbeing: {
        title: "Student Support",
        description: "General support and wellbeing",
        url: "https://www.hku.nl/en/study-at-hku"
      }
    }
  },

  "kabk": {
    name: "Royal Academy of Art, The Hague",
    shortName: "KABK",
    type: "arts",
    lastVerified: "2026-08-07",
    website: "https://www.kabk.nl",
    services: {
      counsellor: {
        title: "Student Counsellor",
        description: "Support with personal circumstances",
        url: "https://www.kabk.nl/en/practical-matters"
      },
      studyAdvisor: {
        title: "Study Information",
        description: "Academic guidance and support",
        url: "https://www.kabk.nl/en/practical-matters"
      },
      wellbeing: {
        title: "Student Support",
        description: "General support and wellbeing",
        url: "https://www.kabk.nl/en/practical-matters"
      }
    }
  },

  "koncon": {
    name: "Royal Conservatoire The Hague",
    shortName: "KC",
    type: "arts",
    lastVerified: "2026-08-07",
    website: "https://www.koncon.nl",
    services: {
      counsellor: {
        title: "Student Counsellor",
        description: "Support with personal circumstances",
        url: "https://www.koncon.nl/en/studentcounsellor"
      },
      wellbeing: {
        title: "Student Support",
        description: "Health and wellbeing resources",
        url: "https://www.koncon.nl/en/practice-health-well-being-at-the-royal-conservatoire/student-guidance-counselling-and-confidentiality"
      }
    }
  },

  "wdka": {
    name: "Willem de Kooning Academy",
    shortName: "WdKA",
    type: "arts",
    lastVerified: "2026-08-07",
    website: "https://www.wdka.nl",
    services: {
      counsellor: {
        title: "Student Counsellor",
        description: "Support with personal circumstances",
        url: "https://www.wdka.nl/contact"
      },
      studyAdvisor: {
        title: "Study Coach",
        description: "Academic guidance and support",
        url: "https://www.wdka.nl/contact"
      },
      wellbeing: {
        title: "Student Support",
        description: "General support and wellbeing",
        url: "https://www.wdka.nl/contact"
      }
    }
  },

  // ==========================================
  // SPECIALIZED INSTITUTIONS
  // ==========================================

  "hotelschool": {
    name: "Hotelschool The Hague",
    shortName: "HTH",
    type: "specialized",
    lastVerified: "2026-08-07",
    website: "https://www.hotelschool.nl",
    services: {
      counsellor: {
        title: "Student Counsellor",
        description: "Support with personal circumstances",
        url: "https://www.hotelschool.nl/study/student-life/"
      },
      studyAdvisor: {
        title: "Academic Support",
        description: "Study guidance and coaching",
        url: "https://www.hotelschool.nl/study/student-life/"
      },
      wellbeing: {
        title: "Student Life",
        description: "Wellbeing and support services",
        url: "https://www.hotelschool.nl/study/student-life/"
      }
    }
  },

  "nyenrode": {
    name: "Nyenrode Business University",
    shortName: "Nyenrode",
    type: "specialized",
    lastVerified: "2026-08-07",
    website: "https://www.nyenrode.nl",
    services: {
      counsellor: {
        title: "Confidential Advisors",
        description: "Support with personal circumstances",
        url: "https://www.nyenrode.nl/en/confidential-advisors"
      },
      studyAdvisor: {
        title: "Academic Support",
        description: "Study guidance",
        url: "https://www.nyenrode.nl/en/information/facility/living-on-campus"
      },
      wellbeing: {
        title: "Student Life",
        description: "Campus life and wellbeing",
        url: "https://www.nyenrode.nl/en/information/facility/living-on-campus"
      }
    }
  },

  "ihe": {
    name: "IHE Delft Institute for Water Education",
    shortName: "IHE Delft",
    type: "specialized",
    lastVerified: "2026-08-07",
    website: "https://www.un-ihe.org",
    services: {
      counsellor: {
        title: "Student Affairs",
        description: "Support for international students",
        url: "https://www.un-ihe.org/education/student-experiences"
      },
      wellbeing: {
        title: "Student Services",
        description: "General support and wellbeing",
        url: "https://www.un-ihe.org/education/student-experiences"
      }
    }
  },

  "tio": {
    name: "Tio University of Applied Sciences",
    shortName: "Tio",
    type: "specialized",
    lastVerified: "2026-08-07",
    website: "https://www.tio.nl",
    services: {
      counsellor: {
        title: "Student Support",
        description: "Personal guidance and support",
        url: "https://www.tio.nl/en/studychoice/"
      },
      studyAdvisor: {
        title: "Study Coach",
        description: "Academic guidance",
        url: "https://www.tio.nl/en/studychoice/"
      },
      wellbeing: {
        title: "Student Wellbeing",
        description: "General support services",
        url: "https://www.tio.nl/en/studychoice/"
      }
    }
  },

  // ==========================================
  // THEOLOGICAL INSTITUTIONS
  // ==========================================

  "pthu": {
    name: "Protestant Theological University",
    shortName: "PThU",
    type: "specialized",
    lastVerified: "2026-08-07",
    website: "https://www.pthu.nl",
    services: {
      counsellor: {
        title: "Student Support",
        description: "Personal guidance and support",
        url: "https://www.pthu.nl/en/education/"
      },
      studyAdvisor: {
        title: "Study Advisor",
        description: "Academic guidance",
        url: "https://www.pthu.nl/en/education/"
      }
    }
  }
};

const nationalResources = {
  emergency: {
    title: "Emergency Services",
    number: "112",
    description: "For life-threatening situations - ambulance, fire, police",
    priority: 1
  },
  suicidePrevention: {
    title: "113 Suicide Prevention",
    number: "0800-0113",
    shortNumber: "113",
    website: "https://www.113.nl/english",
    description: "24/7 crisis support for suicidal thoughts - available in Dutch and English",
    languages: ["Dutch", "English"],
    priority: 2
  },
  luisterlijn: {
    title: "De Luisterlijn - Anonymous Listening Line",
    number: "088-0767 000",
    website: "https://www.deluisterlijn.nl",
    description: "24/7 anonymous support by phone, chat, or email",
    priority: 3
  },
  korrelatie: {
    title: "Korrelatie",
    number: "0900-1450",
    website: "https://www.korrelatie.nl",
    description: "Mental health support and information helpline",
    priority: 4
  },
  duo: {
    title: "DUO - Student Finance",
    website: "https://duo.nl/particulier/student-finance/",
    description: "Government student loans, grants and allowances",
    priority: 5
  },
  uaf: {
    title: "UAF - Refugee Student Support",
    website: "https://www.uaf.nl/en/",
    description: "Support for refugee and asylum seeker students in higher education",
    priority: 6
  },
  nuffic: {
    title: "Nuffic - Study in Holland",
    website: "https://www.studyinholland.nl",
    description: "Information portal for international students",
    priority: 7
  },
  iso: {
    title: "ISO - Dutch Student Union",
    website: "https://iso.nl/home/",
    description: "National student organization representing student interests",
    priority: 8
  },
  lsvb: {
    title: "LSVb - National Student Union",
    website: "https://lsvb.nl/",
    description: "Advocacy organization for student rights",
    priority: 9
  },
  mindkorrelatie: {
    title: "MIND Korrelatie",
    website: "https://mindkorrelatie.nl/",
    description: "Mental health information and peer support",
    priority: 10
  }
};

const serviceCategories = {
  psychologist: {
    title: "Mental Health",
    label: "Psychologist",
    description: "Psychological support for personal and study-related problems"
  },
  counsellor: {
    title: "Student Counsellor",
    label: "Counselling",
    description: "Help with personal circumstances affecting your studies"
  },
  studyAdvisor: {
    title: "Study Adviser",
    label: "Academic",
    description: "Academic guidance and study planning"
  },
  disability: {
    title: "Disability Support",
    label: "Accessibility",
    description: "Support for students with disabilities or chronic conditions"
  },
  financial: {
    title: "Financial Support",
    label: "Financial",
    description: "Financial aid, emergency funds, and advice"
  },
  wellbeing: {
    title: "General Wellbeing",
    label: "Wellbeing",
    description: "General wellbeing resources and support"
  },
  crisis: {
    title: "Crisis Support",
    label: "Urgent",
    description: "Immediate help in crisis situations"
  }
};

const directoryMeta = {
  // Every link in this file was opened and read on this date. The weekly link
  // check in CI catches breakage between reviews; this is the last time a
  // person confirmed the page behind each link is still the right page.
  lastChecked: "2026-08-07"
};
