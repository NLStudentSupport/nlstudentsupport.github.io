<div align="center">

# NL Student Support

![HTML/CSS/JS](https://img.shields.io/badge/HTML%2FCSS%2FJS-blue)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

*A free directory of student support services at Dutch higher education institutions.*

</div>

## Overview

NL Student Support helps students in the Netherlands find the official support services of their own institution — mental health, counselling, academic guidance, disability support, financial support, and wellbeing — plus national support resources. All entries link to official institutional and organisational websites.

**Live site:** [https://nlstudentsupport.github.io](https://nlstudentsupport.github.io)

## Features

- **Directory of 49 Dutch higher education institutions** — 14 research universities, 20 universities of applied sciences (HBO), 10 arts & music institutions, and 5 specialized institutions
- **Search and filter** — by institution name, institution type, and available service
- **Seven service categories** — Psychologist, Student Counsellor, Study Adviser, Disability Support, Financial Support, Wellbeing, and Crisis Support
- **National resources tab** — national helplines and student organisations (crisis lines, student finance, student unions, refugee and international student support)
- **Dedicated page for Iranian students** — university contacts, application-deadline guidance, and immediate-help resources at `iran-support/`

## Usage

Visit the site, search or filter for your institution, and pick the type of support you need; each entry links directly to the institution's official support pages.

As stated on the site itself: all links direct to official institutional websites — always verify information directly with your institution. In an emergency call 112; for crisis support call 113 or visit [113.nl](https://www.113.nl).

## Repository Structure

```
nlstudentsupport.github.io/
├── index.html            # Main page: directory, filters, national resources
├── iran-support/
│   └── index.html        # Support page for Iranian students
├── js/
│   ├── data.js           # Institution and service data (49 institutions)
│   └── app.js            # Search, filtering, and rendering logic
└── css/style.css         # Styling
```

## Local Preview

Static site, no build step:

```bash
git clone https://github.com/NLStudentSupport/nlstudentsupport.github.io.git
cd nlstudentsupport.github.io
python3 -m http.server 8000   # or simply open index.html in a browser
```

Then visit `http://localhost:8000`.

## Deployment

GitHub Pages serves the `main` branch at https://nlstudentsupport.github.io; every push to `main` deploys automatically.

## Contributing

Information is gathered from publicly available official university support pages. If you notice a broken link or missing information, please open an issue or submit a pull request.

## Maintainer

**Hadi Mohammadi** — [mohammadi.cv](https://mohammadi.cv)
