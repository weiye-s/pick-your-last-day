# 📅 Pick the Right Last Day

> **Smart resignation timing calculator that maximizes your benefits when leaving your job**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Available-brightgreen)](https://weiye-s.github.io/pick-your-last-day)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/weiye-s/pick-your-last-day?style=social)](https://github.com/weiye-s/pick-your-last-day/stargazers)

**Pick the Right Last Day** is a comprehensive web tool that analyzes your employment situation and calculates the optimal resignation timing to maximize your annual leave benefits, ensure proper notice compliance, and optimize your career transition.

---

## 🎯 **What It Does**

This tool helps you make data-driven decisions about when to resign by analyzing multiple factors:

### 📊 **Smart Strategy Analysis**
- **💼 Standard Resignation**: Work full notice, get maximum cash payout
- **🚀 Earliest Last Day**: Use AL strategically to finish work sooner  
- **⚖️ Smart Balanced**: Optimize AL timing with weekends and holidays

### 🧮 **Comprehensive Calculations**
- Annual leave entitlement and pro-rata calculations
- Notice period requirements (calendar vs working days)
- Leave policies (full payout, partial, or forfeit)
- Salary payment cycle optimization
- Official public holidays and business day calculations
- Smart holiday detection (never waste AL on public holidays)

---

## ✨ **Key Features**

### 🎯 **Smart & Accurate**
- **3 Strategic Approaches**: Compare different resignation strategies with detailed pros/cons
- **Holiday-Aware**: Never suggests using AL on weekends or public holidays
- **Official Data**: Uses government-verified public holiday information
- **Decimal Precision**: Handles fractional AL days (e.g., 8.7 days)

### 🖥️ **User Experience**
- **Interactive Calendar**: Visual timeline with named holidays (e.g., "CNY", "Vesak Day", "Deepavali")
- **Hover Details**: Full holiday names appear on hover for easy identification
- **Responsive Design**: Perfect on desktop, tablet, and mobile devices
- **No Registration**: Free to use with no account required
- **Privacy First**: All calculations happen locally in your browser

### 🌍 **Currently Supported**
- 🇭🇰 **Hong Kong** (Hong Kong Employment Ordinance)
- 🇸🇬 **Singapore** (Employment Act & MOM Guidelines)
- More countries planned with official government data sources

---

## 🚀 **Quick Start**

### **[👉 Try the Live Demo](https://weiye-s.github.io/pick-your-last-day)**

### **Use the Tool**
1. **🌍 Select Country**: Choose Hong Kong or Singapore (more coming soon)
2. **📋 Enter Details**: Notice period, AL remaining, leave policy
3. **📅 Set Dates**: Resignation date and leave year information  
4. **🎯 Get Results**: See optimal strategies with calendar visualization
5. **📊 Compare**: Review pros/cons of each approach

---

## 📸 **Screenshots**

### Main Interface
*Clean, intuitive form with smart defaults for Hong Kong employees*

### Strategy Comparison  
*Side-by-side analysis of resignation approaches with detailed breakdowns*

### Interactive Calendar
*Visual timeline showing AL usage, holidays, and key dates*

---

## 🏗️ **Technical Implementation**

### **Built With**
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **No Dependencies**: Lightweight, fast-loading
- **Data Sources**: Official government holiday calendars
- **Standards**: Web Content Accessibility Guidelines (WCAG) compliant

### **Project Structure**
```
pick-last-day/
├── 📄 index.html          # Main application interface
├── 🎨 styles.css          # Modern responsive styling  
├── ⚙️ script.js           # Core calculation engine
├── 📋 README.md           # Documentation (this file)
└── 🌐 CNAME              # Custom domain configuration
```

### **Core Algorithms**
- **Business Day Calculator**: Accurate working day calculations excluding weekends and public holidays
- **AL Optimization Engine**: Smart annual leave usage that maximizes consecutive time off
- **Notice Period Validator**: Ensures compliance with employment law requirements
- **Holiday Bridge Detection**: Finds opportunities to connect AL with weekends and holidays

---

## 🔧 **Development & Deployment**

### **Local Development**

```bash
# Clone the repository
git clone https://github.com/weiye-s/pick-your-last-day.git
cd pick-your-last-day

# Start local server (choose one)
python3 -m http.server 8000        # Python 3
python -m SimpleHTTPServer 8000    # Python 2  
npx serve .                         # Node.js

# Open in browser
open http://localhost:8000
```

### **Deployment Options**

#### **GitHub Pages (Recommended)**
1. Fork/clone this repository
2. Enable GitHub Pages in repository settings
3. Deploy from `main` branch
4. Access at: `https://weiye-s.github.io/pick-your-last-day`

#### **Other Platforms**
- **Netlify**: Drag & drop deployment
- **Vercel**: Git integration with auto-deploy
- **Firebase Hosting**: Google's global CDN

#### **Custom Domain**
Perfect domain suggestions: `picklastday.com`, `resignationplanner.com`, `optimalresignation.com`

---

## 🌍 **Supported Countries & Legal Framework**

### 🇭🇰 **Hong Kong** 
**Implementation based on:**
- **📚 Hong Kong Employment Ordinance (Cap. 57)**
- **🏛️ General Holidays Ordinance (Cap. 149)**
- **📅 Official Government Holiday Calendar**

**Features:**
- ✅ All 17 annual general holidays (government-verified)
- ✅ Detailed holiday names in calendar view (e.g., "LNY", "CM", "HKSAR")
- ✅ Pro-rata annual leave calculations  
- ✅ Notice period compliance (calendar/working days)
- ✅ Leave policy variations (payout/forfeit/partial)

**Data Sources:**
- [Hong Kong Government Holiday Calendar](https://www.gov.hk/en/about/abouthk/holiday/)
- [Labour Department Employment Ordinance](https://www.labour.gov.hk/eng/legislat/content2.htm)

### 🇸🇬 **Singapore** 
**Implementation based on:**
- **📚 Employment Act (Chapter 91)**
- **🏛️ Ministry of Manpower (MOM) Public Holiday Guidelines**
- **📅 Official MOM Holiday Calendar**

**Features:**
- ✅ All 11 annual gazetted public holidays (MOM-verified)
- ✅ Detailed holiday names in calendar view (e.g., "CNY", "HRP", "VD", "DV")
- ✅ Pro-rata annual leave calculations  
- ✅ Notice period compliance (calendar/working days)
- ✅ Leave policy variations (payout/forfeit/partial)

**Data Sources:**
- [MOM Public Holidays](https://www.mom.gov.sg/employment-practices/public-holidays)
- [MOM Employment Act Guidelines](https://www.mom.gov.sg/employment-practices/employment-act)

### 🔮 **Coming Soon**
- 🇬🇧 **United Kingdom** (Employment Rights Act)
- 🇦🇺 **Australia** (Fair Work Act)
- 🇨🇦 **Canada** (Provincial employment standards)

---

## ⚠️ **Important Legal Disclaimer**

This tool provides **guidance based on general employment practices** and publicly available legal information. 

**⚖️ Always consult with qualified professionals** before making resignation decisions:
- HR departments for company-specific policies
- Legal professionals for complex employment situations  
- Financial advisors for career transition planning

**🔍 Key Considerations:**
- Employment contracts may contain special clauses
- Company policies may exceed statutory minimums
- Laws and regulations change over time
- Individual circumstances vary significantly

---

## 🤝 **Contributing**

We welcome contributions to expand country support and improve functionality!

### **How to Contribute**
1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/add-singapore`)
3. **✨ Implement** your changes with proper testing
4. **📝 Document** any new features or country-specific logic
5. **🚀 Submit** a pull request with detailed description

### **Adding New Countries**
When adding support for new countries, please ensure:
- **📚 Official Sources**: Use only government-published holiday calendars
- **⚖️ Legal Accuracy**: Reference official employment legislation
- **🧪 Comprehensive Testing**: Test with various scenarios
- **📖 Documentation**: Update README with data sources and legal framework

### **Development Guidelines**
- Follow existing code style and structure
- Add comprehensive comments for complex calculations
- Ensure mobile responsiveness for new features
- Test across multiple browsers and devices

---

## 📈 **Roadmap**

### **Short Term (Next 3 months)**
- [ ] 🇸🇬 Singapore employment law support
- [ ] 📱 Progressive Web App (PWA) functionality
- [ ] 🌙 Dark mode toggle
- [ ] 📊 Enhanced calendar with month navigation

### **Medium Term (6 months)**
- [ ] 🇬🇧 United Kingdom support
- [ ] 📧 Email export of calculations
- [ ] 🔗 Shareable calculation links
- [ ] 🌐 Multi-language interface

### **Long Term (1 year)**
- [ ] 📄 Employment contract analysis
- [ ] 🤖 API for HR software integration
- [ ] 📱 Native mobile applications
- [ ] 🎓 Educational content and guides

---

## 📊 **Analytics & Usage**

This tool is designed to help thousands of employees make better career transitions. If you find it useful:

- ⭐ **Star this repository** to show support
- 🐛 **Report issues** to help improve the tool
- 💡 **Suggest features** for new functionality
- 🌍 **Share with colleagues** who might benefit

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**🆓 Free to use, modify, and distribute** for personal and commercial purposes.

---

## 🙏 **Acknowledgments**

- **Hong Kong Government** for providing accessible public holiday data
- **Singapore Ministry of Manpower (MOM)** for comprehensive employment law guidelines
- **Employment law professionals** who reviewed calculations for accuracy
- **Beta testers** who provided feedback during development
- **Open source community** for inspiration and best practices

---

## 📞 **Support & Contact**

- **🐛 Bug Reports**: [GitHub Issues](https://github.com/weiye-s/pick-your-last-day/issues)
- **💡 Feature Requests**: [GitHub Discussions](https://github.com/weiye-s/pick-your-last-day/discussions)
- **📧 Direct Contact**: Available via GitHub

---

<div align="center">

**📅 Built with ❤️ to help people make better career transitions**

[Live Demo](https://weiye-s.github.io/pick-your-last-day) • [Report Bug](https://github.com/weiye-s/pick-your-last-day/issues) • [Request Feature](https://github.com/weiye-s/pick-your-last-day/discussions)

</div> 