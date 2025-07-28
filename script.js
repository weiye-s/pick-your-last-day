// Production Employment Calculator v2.0 - Multi-year, Multi-country Support
// Optimized single-class, data-driven approach for easy maintenance
// 
// 🔄 DATA MAINTENANCE NOTES:
// • Holiday data covers 2023-2026 for comprehensive planning
// • New years should be added annually by extending each country's arrays
// • Official sources: HK Gov, Singapore MOM, UK GOV.UK
// • Religious holidays (Islamic, Hindu, Buddhist) may change - verify with official sources
// • Update dataSource.lastUpdated when holidays are refreshed

// Country-specific data configurations
const COUNTRY_CONFIGS = {
    'hong-kong': {
        name: 'Hong Kong',
        flag: '🇭🇰',
        publicHolidays: [
            // 2023 - Hong Kong General Holidays (Official Gazette)
            '2023-01-01', '2023-01-22', '2023-01-23', '2023-01-24', '2023-04-05', '2023-04-07', 
            '2023-04-08', '2023-04-10', '2023-05-01', '2023-05-26', '2023-06-22', '2023-07-01', 
            '2023-09-30', '2023-10-01', '2023-10-23', '2023-12-25', '2023-12-26',
            
            // 2024 - Hong Kong General Holidays
            '2024-01-01', '2024-02-10', '2024-02-12', '2024-02-13', '2024-03-29', '2024-03-30', 
            '2024-04-01', '2024-04-04', '2024-05-01', '2024-05-15', '2024-06-10', '2024-07-01', 
            '2024-09-18', '2024-10-01', '2024-10-11', '2024-12-25', '2024-12-26',
            
            // 2025 - Hong Kong General Holidays
            '2025-01-01', '2025-01-29', '2025-01-30', '2025-01-31', '2025-04-04', '2025-04-18', 
            '2025-04-19', '2025-04-21', '2025-05-01', '2025-05-05', '2025-05-31', '2025-07-01', 
            '2025-10-01', '2025-10-06', '2025-10-29', '2025-12-25', '2025-12-26',
            
            // 2026 - Hong Kong General Holidays (Official Gazette Published May 2025)
            '2026-01-01', '2026-02-17', '2026-02-18', '2026-02-19', '2026-04-03', '2026-04-04', 
            '2026-04-06', '2026-04-07', '2026-05-01', '2026-05-25', '2026-06-19', '2026-07-01', 
            '2026-09-26', '2026-10-01', '2026-10-19', '2026-12-25', '2026-12-26'
        ],
        holidayNames: {
            // 2023 Holiday Names
            '2023-01-01': 'New Year\'s Day', '2023-01-22': 'Lunar New Year', '2023-01-23': 'Lunar New Year (2nd Day)',
            '2023-01-24': 'Lunar New Year (3rd Day)', '2023-04-05': 'Ching Ming Festival', '2023-04-07': 'Good Friday',
            '2023-04-08': 'Day after Good Friday', '2023-04-10': 'Easter Monday', '2023-05-01': 'Labour Day',
            '2023-05-26': 'Buddha\'s Birthday', '2023-06-22': 'Dragon Boat Festival', '2023-07-01': 'HKSAR Establishment Day',
            '2023-09-30': 'Day after Mid-Autumn Festival', '2023-10-01': 'National Day', '2023-10-23': 'Chung Yeung Festival',
            '2023-12-25': 'Christmas Day', '2023-12-26': 'Boxing Day',
            
            // 2024 Holiday Names
            '2024-01-01': 'New Year\'s Day', '2024-02-10': 'Lunar New Year', '2024-02-12': 'Lunar New Year (2nd Day)',
            '2024-02-13': 'Lunar New Year (3rd Day)', '2024-03-29': 'Good Friday', '2024-03-30': 'Day after Good Friday',
            '2024-04-01': 'Easter Monday', '2024-04-04': 'Ching Ming Festival', '2024-05-01': 'Labour Day',
            '2024-05-15': 'Buddha\'s Birthday', '2024-06-10': 'Dragon Boat Festival', '2024-07-01': 'HKSAR Establishment Day',
            '2024-09-18': 'Day after Mid-Autumn Festival', '2024-10-01': 'National Day', '2024-10-11': 'Chung Yeung Festival',
            '2024-12-25': 'Christmas Day', '2024-12-26': 'Boxing Day',
            
            '2025-01-01': 'New Year\'s Day', '2025-01-29': 'Lunar New Year', '2025-01-30': 'Lunar New Year (2nd Day)',
            '2025-01-31': 'Lunar New Year (3rd Day)', '2025-04-04': 'Ching Ming Festival', '2025-04-18': 'Good Friday',
            '2025-04-19': 'Day after Good Friday', '2025-04-21': 'Easter Monday', '2025-05-01': 'Labour Day',
            '2025-05-05': 'Buddha\'s Birthday', '2025-05-31': 'Dragon Boat Festival', '2025-07-01': 'HKSAR Establishment Day',
            '2025-10-01': 'National Day', '2025-10-06': 'Day after Mid-Autumn Festival', '2025-10-29': 'Chung Yeung Festival',
            '2025-12-25': 'Christmas Day', '2025-12-26': 'Boxing Day',
            
            // 2026 Holiday Names
            '2026-01-01': 'New Year\'s Day', '2026-02-17': 'Lunar New Year', '2026-02-18': 'Lunar New Year (2nd Day)',
            '2026-02-19': 'Lunar New Year (3rd Day)', '2026-04-03': 'Good Friday', '2026-04-04': 'Day after Good Friday',
            '2026-04-06': 'Day after Ching Ming Festival', '2026-04-07': 'Day after Easter Monday', '2026-05-01': 'Labour Day',
            '2026-05-25': 'Day after Buddha\'s Birthday', '2026-06-19': 'Dragon Boat Festival', '2026-07-01': 'HKSAR Establishment Day',
            '2026-09-26': 'Day after Mid-Autumn Festival', '2026-10-01': 'National Day', '2026-10-19': 'Day after Chung Yeung Festival',
            '2026-12-25': 'Christmas Day', '2026-12-26': 'Boxing Day'
        },
        dataSource: {
            country: "Hong Kong",
            officialSource: "Hong Kong Government",
            sourceUrl: "https://www.gov.hk/en/about/abouthk/holiday/",
            legalReference: "Employment Ordinance (Chapter 57)",
            lastUpdated: "July 2025",
            note: "Hong Kong follows both lunar and solar calendar holidays. Covers 2023-2026. 2026 dates from official gazette published May 2025."
        }
    },

    'singapore': {
        name: 'Singapore',
        flag: '🇸🇬',
        publicHolidays: [
            // 2023 - Singapore Public Holidays (11 gazetted holidays)
            '2023-01-01', '2023-01-22', '2023-01-23', '2023-04-07', '2023-04-22', '2023-05-01',
            '2023-05-26', '2023-06-29', '2023-08-09', '2023-11-12', '2023-12-25',
            
            // 2024 - Singapore Public Holidays
            '2024-01-01', '2024-02-10', '2024-02-12', '2024-03-29', '2024-04-10', '2024-05-01',
            '2024-05-22', '2024-06-17', '2024-08-09', '2024-10-31', '2024-12-25',
            
            // 2025 - Singapore Public Holidays (Official MOM Release)
            '2025-01-01', '2025-01-29', '2025-01-30', '2025-03-31', '2025-04-18', '2025-05-01',
            '2025-05-12', '2025-06-07', '2025-08-09', '2025-10-20', '2025-12-25',
            
            // 2026 - Singapore Public Holidays (Official MOM Release June 2025)
            '2026-01-01', '2026-02-17', '2026-02-18', '2026-03-21', '2026-04-03', '2026-05-01',
            '2026-05-27', '2026-06-01', '2026-08-10', '2026-11-09', '2026-12-25'
        ],
        holidayNames: {
            // 2023 Holiday Names (estimated based on typical Singapore pattern)
            '2023-01-01': 'New Year\'s Day', '2023-01-22': 'Chinese New Year', '2023-01-23': 'Chinese New Year (2nd Day)',
            '2023-04-07': 'Good Friday', '2023-04-22': 'Hari Raya Puasa', '2023-05-01': 'Labour Day',
            '2023-05-26': 'Vesak Day', '2023-06-29': 'Hari Raya Haji', '2023-08-09': 'National Day',
            '2023-11-12': 'Deepavali', '2023-12-25': 'Christmas Day',
            
            // 2024 Holiday Names
            '2024-01-01': 'New Year\'s Day', '2024-02-10': 'Chinese New Year', '2024-02-12': 'Chinese New Year (2nd Day)',
            '2024-03-29': 'Good Friday', '2024-04-10': 'Hari Raya Puasa', '2024-05-01': 'Labour Day',
            '2024-05-22': 'Vesak Day', '2024-06-17': 'Hari Raya Haji', '2024-08-09': 'National Day',
            '2024-10-31': 'Deepavali', '2024-12-25': 'Christmas Day',
            
            // 2025 Holiday Names
            '2025-01-01': 'New Year\'s Day', '2025-01-29': 'Chinese New Year', '2025-01-30': 'Chinese New Year (2nd Day)',
            '2025-03-31': 'Hari Raya Puasa', '2025-04-18': 'Good Friday', '2025-05-01': 'Labour Day',
            '2025-05-12': 'Vesak Day', '2025-06-07': 'Hari Raya Haji', '2025-08-09': 'National Day',
            '2025-10-20': 'Deepavali', '2025-12-25': 'Christmas Day',
            
            // 2026 Holiday Names (Official MOM Release)
            '2026-01-01': 'New Year\'s Day', '2026-02-17': 'Chinese New Year', '2026-02-18': 'Chinese New Year (2nd Day)',
            '2026-03-21': 'Hari Raya Puasa', '2026-04-03': 'Good Friday', '2026-05-01': 'Labour Day',
            '2026-05-27': 'Hari Raya Haji', '2026-06-01': 'Vesak Day', '2026-08-10': 'National Day',
            '2026-11-09': 'Deepavali', '2026-12-25': 'Christmas Day'
        },
        dataSource: {
            country: "Singapore",
            officialSource: "Ministry of Manpower (MOM)",
            sourceUrl: "https://www.mom.gov.sg/employment-practices/public-holidays",
            legalReference: "Employment Act (Chapter 91)",
            lastUpdated: "July 2025",
            note: "Singapore has 11 gazetted public holidays per year. Covers 2023-2026. 2026 dates from official MOM release June 2025. Religious holidays subject to confirmation."
        }
    },

    // 🆕 NEW: United Kingdom (England & Wales) - Easy to add!
    'united-kingdom': {
        name: 'United Kingdom',
        flag: '🇬🇧',
        publicHolidays: [
            // 2023 - UK Bank Holidays (England & Wales)
            '2023-01-02', '2023-04-07', '2023-04-10', '2023-05-01', '2023-05-29', 
            '2023-08-28', '2023-12-25', '2023-12-26',
            
            // 2024 - UK Bank Holidays (England & Wales)
            '2024-01-01', '2024-03-29', '2024-04-01', '2024-05-06', '2024-05-27', 
            '2024-08-26', '2024-12-25', '2024-12-26',
            
            // 2025 - UK Bank Holidays (England & Wales)
            '2025-01-01', '2025-04-18', '2025-04-21', '2025-05-05', '2025-05-26', 
            '2025-08-25', '2025-12-25', '2025-12-26',
            
            // 2026 - UK Bank Holidays (England & Wales)
            '2026-01-01', '2026-04-03', '2026-04-06', '2026-05-04', '2026-05-25', 
            '2026-08-31', '2026-12-25', '2026-12-28'
        ],
        holidayNames: {
            // 2023 Bank Holidays
            '2023-01-02': 'New Year\'s Day (substitute)', '2023-04-07': 'Good Friday', '2023-04-10': 'Easter Monday',
            '2023-05-01': 'Early May Bank Holiday', '2023-05-29': 'Spring Bank Holiday', 
            '2023-08-28': 'Summer Bank Holiday', '2023-12-25': 'Christmas Day', '2023-12-26': 'Boxing Day',
            
            // 2024 Bank Holidays
            '2024-01-01': 'New Year\'s Day', '2024-03-29': 'Good Friday', '2024-04-01': 'Easter Monday',
            '2024-05-06': 'Early May Bank Holiday', '2024-05-27': 'Spring Bank Holiday', 
            '2024-08-26': 'Summer Bank Holiday', '2024-12-25': 'Christmas Day', '2024-12-26': 'Boxing Day',
            
            // 2025 Bank Holidays
            '2025-01-01': 'New Year\'s Day', '2025-04-18': 'Good Friday', '2025-04-21': 'Easter Monday',
            '2025-05-05': 'Early May Bank Holiday', '2025-05-26': 'Spring Bank Holiday',
            '2025-08-25': 'Summer Bank Holiday', '2025-12-25': 'Christmas Day', '2025-12-26': 'Boxing Day',
            
            // 2026 Bank Holidays
            '2026-01-01': 'New Year\'s Day', '2026-04-03': 'Good Friday', '2026-04-06': 'Easter Monday',
            '2026-05-04': 'Early May Bank Holiday', '2026-05-25': 'Spring Bank Holiday',
            '2026-08-31': 'Summer Bank Holiday', '2026-12-25': 'Christmas Day', '2026-12-28': 'Boxing Day (substitute)'
        },
        dataSource: {
            country: "United Kingdom",
            officialSource: "GOV.UK",
            sourceUrl: "https://www.gov.uk/bank-holidays",
            legalReference: "Employment Rights Act 1996",
            lastUpdated: "July 2025",
            note: "Bank holidays for England and Wales. Covers 2023-2026. Scotland and Northern Ireland have different dates. Data from official GOV.UK sources."
        }
    }
    
    // 📅 ANNUAL MAINTENANCE GUIDE:
    // 1. Add new year's holidays to each country's publicHolidays array
    // 2. Add corresponding holiday names to holidayNames object  
    // 3. Update dataSource.lastUpdated for each country
    // 4. Official sources to check:
    //    • Hong Kong: https://www.gov.hk/en/about/abouthk/holiday/
    //    • Singapore: https://www.mom.gov.sg/employment-practices/public-holidays  
    //    • UK: https://www.gov.uk/bank-holidays
    // 5. Religious holidays may change (Islamic, Hindu, Buddhist calendar-based)
    // 6. Consider automated update scripts for production systems
};

// Single, reusable Employment Calculator class
class EmploymentCalculator {
    constructor(countryCode) {
        // Load country-specific configuration
        this.countryConfig = COUNTRY_CONFIGS[countryCode];
        if (!this.countryConfig) {
            throw new Error(`Unsupported country: ${countryCode}. Available: ${Object.keys(COUNTRY_CONFIGS).join(', ')}`);
        }
        
        // Set country-specific data
        this.countryCode = countryCode;
        this.countryName = this.countryConfig.name;
        this.publicHolidays = this.countryConfig.publicHolidays;
        this.holidayNames = this.countryConfig.holidayNames;
        this.dataSource = this.countryConfig.dataSource;
        
        console.log(`✅ Initialized ${this.countryName} Employment Calculator with ${this.publicHolidays.length} holidays`);
    }

    // ===== UTILITY METHODS (SAME FOR ALL COUNTRIES) =====
    
    formatDate(date) {
        if (!date || isNaN(date.getTime())) return 'Invalid Date';
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    parseDate(dateString) {
        if (!dateString) return null;
        const date = new Date(dateString + 'T00:00:00');
        return isNaN(date.getTime()) ? null : date;
    }

    isBusinessDay(date) {
        const dayOfWeek = date.getDay();
        const dateString = this.formatDate(date);
        return dayOfWeek !== 0 && dayOfWeek !== 6 && !this.publicHolidays.includes(dateString);
    }

    getHolidayName(date) {
        const dateString = this.formatDate(date);
        return this.holidayNames[dateString] || null;
    }

    getHolidayAbbreviation(holidayName) {
        if (!holidayName) return 'H';
        
        const abbreviations = {
            // Hong Kong holidays
            'New Year\'s Day': 'NY', 'Lunar New Year': 'LNY', 'Lunar New Year (2nd Day)': 'LNY2',
            'Lunar New Year (3rd Day)': 'LNY3', 'Good Friday': 'GF', 'Day after Good Friday': 'GF+',
            'Easter Monday': 'EM', 'Ching Ming Festival': 'CM', 'Labour Day': 'LD',
            'Buddha\'s Birthday': 'BB', 'Dragon Boat Festival': 'DB', 'HKSAR Establishment Day': 'HKSAR',
            'National Day': 'ND', 'Day after Mid-Autumn Festival': 'MAF+', 'Chung Yeung Festival': 'CY',
            'Christmas Day': 'XM', 'Boxing Day': 'BX',
            // Singapore holidays
            'Chinese New Year': 'CNY', 'Chinese New Year (2nd Day)': 'CNY2',
            'Hari Raya Puasa': 'HRP', 'Vesak Day': 'VD', 'Hari Raya Haji': 'HRH',
            'Deepavali': 'DE',
            // UK holidays
            'Early May Bank Holiday': 'MAY', 'Spring Bank Holiday': 'SPR', 'Summer Bank Holiday': 'SUM'
        };
        
        return abbreviations[holidayName] || holidayName.substring(0, 2).toUpperCase();
    }

    formatALDays(days) {
        if (days === 0) return "0";
        if (days % 1 === 0) return days.toString();
        return days.toFixed(1);
    }

    // ===== CORE CALCULATION LOGIC (SAME FOR ALL COUNTRIES) =====
    
    calculateOptimalResignation(data) {
        const resignationDate = this.parseDate(data['desired-resignation-date']);
        const noticePeriodValue = parseInt(data['notice-period']);
        const noticePeriodUnit = data['notice-period-unit'];
        const noticePeriodType = data['notice-period-type']; // 🆕 FIX: Get notice period type
        const annualLeaveRemaining = parseFloat(data['annual-leave-remaining']);
        const leavePolicy = data['leave-policy'];
        
        // 🔍 DEBUG: Log all form data to identify the issue
        console.log('📋 Form Data Debug:', {
            'notice-period': data['notice-period'],
            'notice-period-unit': data['notice-period-unit'], 
            'notice-period-type': data['notice-period-type'],
            noticePeriodValue,
            noticePeriodUnit,
            noticePeriodType
        });
        
        if (!resignationDate || isNaN(noticePeriodValue) || isNaN(annualLeaveRemaining)) {
            throw new Error('Invalid input data. Please check all fields.');
        }

        // 🆕 FIX: Calculate last working day based on notice period type
        let lastWorkingDay = new Date(resignationDate);
        
        if (noticePeriodType === 'working') {
            // Working days only - exclude weekends and public holidays
            const noticeDays = noticePeriodUnit === 'months' ? noticePeriodValue * 22 : noticePeriodValue; // 22 avg working days per month
            let addedWorkingDays = 0;
            
            console.log(`🔄 Calculating ${noticeDays} WORKING days notice period for ${this.countryName}`);
            
            while (addedWorkingDays < noticeDays) {
                lastWorkingDay.setDate(lastWorkingDay.getDate() + 1);
                if (this.isBusinessDay(lastWorkingDay)) {
                    addedWorkingDays++;
                }
            }
            console.log(`✅ Last working day (working days): ${this.formatDate(lastWorkingDay)} (added ${addedWorkingDays} working days)`);
        } else {
            // Calendar days - include all days
            const noticeDays = noticePeriodUnit === 'months' ? noticePeriodValue * 30 : noticePeriodValue;
            lastWorkingDay.setDate(lastWorkingDay.getDate() + noticeDays);
            
            console.log(`📅 Calculating ${noticeDays} CALENDAR days notice period for ${this.countryName}`);
            
            // Adjust to business day if it falls on weekend/holiday
            while (!this.isBusinessDay(lastWorkingDay)) {
                lastWorkingDay.setDate(lastWorkingDay.getDate() - 1);
            }
            console.log(`✅ Last working day (calendar days): ${this.formatDate(lastWorkingDay)} (adjusted to business day)`);
        }

        const scenarios = [];
        
        // Strategy 1: Standard Resignation
        const standardALUsed = leavePolicy === 'forfeit' ? annualLeaveRemaining : 0;
        const standardALPaidOut = leavePolicy === 'forfeit' ? 0 : annualLeaveRemaining;
        
        scenarios.push({
            name: "Standard Resignation",
            category: "standard",
            resignationDate,
            lastWorkingDay,
            contractEndDate: lastWorkingDay,
            alRemainingByLastDay: annualLeaveRemaining,
            alUsedDuringNotice: standardALUsed,
            alPaidOut: standardALPaidOut,
            workingDays: this.calculateBusinessDays(resignationDate, lastWorkingDay),
            totalSalaryDays: this.calculateBusinessDays(resignationDate, lastWorkingDay) + standardALPaidOut,
            description: leavePolicy === 'forfeit' ? 
                "Standard approach with AL forfeited - finish on your contracted last day" :
                "Standard approach with AL paid out - finish on your contracted last day and receive cash for unused AL",
            pros: leavePolicy === 'forfeit' ? [
                "✅ Fulfills exact notice period requirements",
                "✅ No complex AL planning required"
            ] : [
                "✅ Maximum cash payout for unused AL",
                "✅ Fulfills exact notice period requirements"
            ],
            cons: leavePolicy === 'forfeit' ? [
                "❌ All AL days are forfeited",
                "❌ No time off during notice period"
            ] : [
                "❌ No actual time off during notice period",
                "❌ Misses opportunity for extended break"
            ]
        });

        // Strategy 2: Earliest Last Day (if AL > 0)
        if (annualLeaveRemaining > 0) {
            const alToUse = Math.min(Math.floor(annualLeaveRemaining), 20);
            const earliestLastDay = new Date(lastWorkingDay);
            earliestLastDay.setDate(earliestLastDay.getDate() - alToUse);
            
            while (!this.isBusinessDay(earliestLastDay)) {
                earliestLastDay.setDate(earliestLastDay.getDate() - 1);
            }
            
            scenarios.push({
                name: "Earliest Last Day",
                category: "earliest",
                resignationDate,
                lastWorkingDay: earliestLastDay,
                contractEndDate: lastWorkingDay,
                alRemainingByLastDay: annualLeaveRemaining,
                alUsedDuringNotice: alToUse,
                alPaidOut: annualLeaveRemaining - alToUse,
                workingDays: this.calculateBusinessDays(resignationDate, earliestLastDay),
                totalSalaryDays: this.calculateBusinessDays(resignationDate, earliestLastDay) + (annualLeaveRemaining - alToUse),
                description: `Use ${this.formatALDays(alToUse)} AL days to finish work earlier and start your next opportunity sooner`,
                pros: [
                    "🚀 Earliest possible last working day",
                    `⏰ ${this.formatALDays(alToUse)} AL days used strategically`,
                    "🎯 Faster transition to new role"
                ],
                cons: [
                    `💰 Less AL paid out (${this.formatALDays(annualLeaveRemaining - alToUse)} days)`,
                    "⚖️ Aggressive AL usage approach"
                ]
            });
        }

        // Strategy 3: Smart Balanced (if AL > 1)
        if (annualLeaveRemaining > 1) {
            const balancedAL = Math.ceil(annualLeaveRemaining * 0.6);
            const balancedLastDay = new Date(lastWorkingDay);
            balancedLastDay.setDate(balancedLastDay.getDate() - Math.floor(balancedAL / 2));
            
            while (!this.isBusinessDay(balancedLastDay)) {
                balancedLastDay.setDate(balancedLastDay.getDate() - 1);
            }
            
            const extendedContract = new Date(lastWorkingDay);
            extendedContract.setDate(extendedContract.getDate() + (balancedAL - Math.floor(balancedAL / 2)));
            
            scenarios.push({
                name: "Smart Balanced",
                category: "balanced",
                resignationDate,
                lastWorkingDay: balancedLastDay,
                contractEndDate: extendedContract,
                alRemainingByLastDay: annualLeaveRemaining,
                alUsedDuringNotice: balancedAL,
                alPaidOut: annualLeaveRemaining - balancedAL,
                workingDays: this.calculateBusinessDays(resignationDate, balancedLastDay),
                totalSalaryDays: this.calculateBusinessDays(resignationDate, balancedLastDay) + (annualLeaveRemaining - balancedAL),
                description: `Use ${this.formatALDays(balancedAL)} AL days strategically with holiday-aware timing`,
                pros: [
                    "🧠 Smart AL allocation with optimization",
                    `🏖️ ${this.formatALDays(balancedAL)} AL days for strategic breaks`,
                    `💰 ${this.formatALDays(annualLeaveRemaining - balancedAL)} AL days still paid out`
                ],
                cons: [
                    "📆 More complex AL timing",
                    "🎯 Moderate finish date"
                ]
            });
        }

        return {
            scenarios,
            optimalScenario: scenarios[0]
        };
    }

    calculateBusinessDays(startDate, endDate) {
        let current = new Date(startDate);
        let businessDays = 0;
        
        while (current < endDate) {
            current.setDate(current.getDate() + 1);
            if (this.isBusinessDay(current)) {
                businessDays++;
            }
        }
        
        return businessDays;
    }

    // Determine if a specific date is an AL day for the given scenario
    isALDay(date, scenario) {
        if (!this.isBusinessDay(date)) {
            return false; // AL is never used on weekends/holidays
        }

        const dateString = this.formatDate(date);
        const resignationDate = new Date(scenario.resignationDate);
        const lastWorkingDay = new Date(scenario.lastWorkingDay);
        const contractEndDate = new Date(scenario.contractEndDate);

        switch (scenario.category) {
            case 'standard':
                // Standard resignation: No AL during notice period (all paid out at end)
                return false;

            case 'earliest':
                // Earliest Last Day: AL used after last working day until contract end
                return date > lastWorkingDay && date <= contractEndDate;

            case 'balanced':
                // Smart Balanced: AL strategically placed based on scenario logic
                return this.isBalancedALDay(date, scenario);

            default:
                return false;
        }
    }

    // Determine AL days for Smart Balanced strategy
    isBalancedALDay(date, scenario) {
        const resignationDate = new Date(scenario.resignationDate);
        const lastWorkingDay = new Date(scenario.lastWorkingDay);
        const contractEndDate = new Date(scenario.contractEndDate);
        const alUsed = scenario.alUsedDuringNotice;
        
        if (date <= resignationDate || date > contractEndDate) {
            return false;
        }

        // For balanced strategy, AL is typically used in strategic blocks
        // This is a simplified implementation - AL days after last working day until contract end
        // In a more sophisticated version, this would follow the exact balanced allocation logic
        let alDaysAllocated = 0;
        let checkDate = new Date(lastWorkingDay);
        checkDate.setDate(checkDate.getDate() + 1);
        
        while (checkDate <= contractEndDate && alDaysAllocated < Math.floor(alUsed)) {
            if (this.isBusinessDay(checkDate)) {
                if (this.formatDate(checkDate) === this.formatDate(date)) {
                    return true;
                }
                alDaysAllocated++;
            }
            checkDate.setDate(checkDate.getDate() + 1);
        }
        
        return false;
    }

    // ===== CALENDAR GENERATION (SAME FOR ALL COUNTRIES) =====
    
    generateCalendarView(scenario) {
        const resignationDate = new Date(scenario.resignationDate);
        const lastWorkingDay = new Date(scenario.lastWorkingDay);
        const contractEndDate = new Date(scenario.contractEndDate);
        
        const startMonth = new Date(resignationDate.getFullYear(), resignationDate.getMonth(), 1);
        const endMonth = new Date(contractEndDate.getFullYear(), contractEndDate.getMonth() + 1, 0);
        
        let calendarHTML = '<div class="calendar-container">';
        
        let currentMonth = new Date(startMonth);
        while (currentMonth <= endMonth) {
            calendarHTML += this.generateMonthCalendar(currentMonth, scenario);
            currentMonth.setMonth(currentMonth.getMonth() + 1);
        }
        
        calendarHTML += '</div>';
        return calendarHTML;
    }

    generateMonthCalendar(monthDate, scenario) {
        const year = monthDate.getFullYear();
        const month = monthDate.getMonth();
        const monthName = monthDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDayOfWeek = firstDay.getDay();
        const daysInMonth = lastDay.getDate();
        
        let html = `
            <div class="month-calendar">
                <h4 class="month-title">${monthName}</h4>
                <div class="calendar-grid">
                    <div class="day-header">Sun</div>
                    <div class="day-header">Mon</div>
                    <div class="day-header">Tue</div>
                    <div class="day-header">Wed</div>
                    <div class="day-header">Thu</div>
                    <div class="day-header">Fri</div>
                    <div class="day-header">Sat</div>
        `;
        
        let dayCount = 1;
        for (let week = 0; week < 6; week++) {
            for (let day = 0; day < 7; day++) {
                if (week === 0 && day < startDayOfWeek) {
                    html += '<div class="day-cell empty"></div>';
                } else if (dayCount <= daysInMonth) {
                    const currentDate = new Date(year, month, dayCount);
                    const dateString = this.formatDate(currentDate);
                    const indicators = [];
                    let cellClass = 'day-cell';
                    
                    // Check for key dates
                    if (dateString === this.formatDate(new Date(scenario.resignationDate))) {
                        cellClass += ' resignation-date';
                        indicators.push('<span class="indicator resignation">R</span>');
                    }
                    
                    if (dateString === this.formatDate(new Date(scenario.lastWorkingDay))) {
                        cellClass += ' last-working-day';
                        indicators.push('<span class="indicator last-work">L</span>');
                    }
                    
                    if (dateString === this.formatDate(new Date(scenario.contractEndDate))) {
                        cellClass += ' contract-end-date';
                        indicators.push('<span class="indicator contract-end">E</span>');
                    }
                    
                    // Check for AL days (enhanced for all strategies)
                    if (this.isALDay(currentDate, scenario)) {
                        cellClass += ' al-day';
                        indicators.push('<span class="indicator al">AL</span>');
                    }
                    
                    // Check for weekends
                    if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
                        cellClass += ' weekend';
                    }
                    
                    // Check for public holidays
                    if (this.publicHolidays.includes(dateString)) {
                        cellClass += ' public-holiday';
                        const holidayName = this.getHolidayName(currentDate);
                        const holidayAbbr = this.getHolidayAbbreviation(holidayName);
                        const tooltipText = holidayName || 'Public Holiday';
                        const escapedTooltip = tooltipText.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
                        
                        const holidaySpan = `<span class="indicator holiday" title="${escapedTooltip}" data-holiday="${escapedTooltip}" onmouseover="showHolidayTooltip(this)" onmouseout="hideHolidayTooltip(this)">${holidayAbbr}</span>`;
                        indicators.push(holidaySpan);
                    }
                    
                    html += `
                        <div class="${cellClass}">
                            <div class="day-number">${dayCount}</div>
                            <div class="indicators">${indicators.join('')}</div>
                        </div>
                    `;
                    dayCount++;
                } else {
                    html += '<div class="day-cell empty"></div>';
                }
            }
        }
        
        html += '</div></div>';
        return html;
    }

    // ===== METADATA & INFO =====
    
    getHolidayDataSource() {
        return this.dataSource;
    }

    getSupportedCountries() {
        return Object.keys(COUNTRY_CONFIGS).map(code => ({
            code,
            name: COUNTRY_CONFIGS[code].name,
            flag: COUNTRY_CONFIGS[code].flag
        }));
    }
}

// ===== FACTORY FUNCTION FOR EASY INSTANTIATION =====

function createEmploymentCalculator(countryCode) {
    return new EmploymentCalculator(countryCode);
}

// ===== MAIN APPLICATION LOGIC =====

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resignation-form');
    const resultsSection = document.getElementById('results');
    const resultsContent = document.getElementById('results-content');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.classList.add('loading');

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Validate supported country
        if (!['hong-kong', 'singapore', 'united-kingdom'].includes(data.country)) {
            alert('Please select Hong Kong, Singapore, or United Kingdom.');
            form.classList.remove('loading');
            return;
        }

        setTimeout(() => {
            try {
                // Create calculator using optimized factory function
                const calculator = createEmploymentCalculator(data.country);
                const result = calculator.calculateOptimalResignation(data);
                
                displayResults(result, calculator);
                resultsSection.classList.remove('hidden');
                resultsSection.scrollIntoView({ behavior: 'smooth' });
            } catch (error) {
                console.error('Calculation error:', error);
                alert(`Calculation error: ${error.message}`);
            }
            form.classList.remove('loading');
        }, 500);
    });

    function displayResults(result, calculatorInstance) {
        resultsContent.innerHTML = '';

        // 🆕 NEW APPROACH: Show intro without bias toward any strategy
        const introCard = document.createElement('div');
        introCard.className = 'result-card';
        introCard.innerHTML = `
            <h3>🎯 Your Resignation Strategy Options</h3>
            <p class="intro-text">Based on your situation, here are <strong>${result.scenarios.length} different approaches</strong> you can take. Each has different benefits depending on your priorities:</p>
            <div class="strategy-priorities">
                <div class="priority-item">🚀 <strong>Earliest Finish:</strong> Start your next role sooner</div>
                <div class="priority-item">💰 <strong>Maximum Payout:</strong> Get paid for unused leave</div>
                <div class="priority-item">⚖️ <strong>Balanced Timing:</strong> Smart leave usage around holidays</div>
            </div>
            <p class="table-instruction">💡 <strong>Click on any strategy below</strong> to view its detailed calendar timeline</p>
        `;
        resultsContent.appendChild(introCard);

        // 🆕 Enhanced strategy comparison with detailed pros/cons
        const scenariosCard = document.createElement('div');
        scenariosCard.className = 'result-card';
        scenariosCard.innerHTML = `
            <h3>📊 Detailed Strategy Comparison</h3>
            <p class="scroll-hint">👆 Swipe left/right to view all strategies</p>
            <div class="strategies-detailed">
                ${result.scenarios.map((scenario, index) => `
                    <div class="strategy-card" data-scenario-index="${index}" onclick="selectScenario(${index})">
                        <div class="strategy-header">
                            <h4>${scenario.name}</h4>
                            <p class="strategy-description">${scenario.description}</p>
                        </div>
                        
                        <div class="strategy-details">
                            <div class="detail-grid">
                                <div class="detail-item">
                                    <strong>Last Working Day:</strong> ${calculatorInstance.formatDate(new Date(scenario.lastWorkingDay))}
                                </div>
                                <div class="detail-item">
                                    <strong>Contract End Date:</strong> ${calculatorInstance.formatDate(new Date(scenario.contractEndDate))}
                                </div>
                                <div class="detail-item">
                                    <strong>AL Used:</strong> ${calculatorInstance.formatALDays(scenario.alUsedDuringNotice)} days
                                </div>
                                <div class="detail-item">
                                    <strong>AL Paid Out:</strong> ${calculatorInstance.formatALDays(scenario.alPaidOut)} days
                                </div>
                                <div class="detail-item">
                                    <strong>Working Days:</strong> ${scenario.workingDays} days
                                </div>
                                <div class="detail-item">
                                    <strong>Total Salary Days:</strong> ${scenario.totalSalaryDays} days
                                </div>
                            </div>
                        </div>
                        
                        <div class="pros-cons">
                            <div class="pros">
                                <h5>✅ Benefits</h5>
                                <ul>
                                    ${scenario.pros.map(pro => `<li>${pro}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="cons">
                                <h5>⚠️ Trade-offs</h5>
                                <ul>
                                    ${scenario.cons.map(con => `<li>${con}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        
                        <div class="strategy-cta">
                            <button class="select-strategy-btn">📅 View Calendar Timeline</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        resultsContent.appendChild(scenariosCard);

        // Add calendar view (restored working version)
        const firstScenario = result.scenarios[0];
        const calendarCard = document.createElement('div');
        calendarCard.className = 'result-card';
        calendarCard.id = 'calendar-card';
        calendarCard.innerHTML = `
            <h3 id="calendar-title">📅 Calendar View - ${firstScenario.name}</h3>
            <p class="calendar-instruction">👆 Click any strategy above to view its calendar timeline</p>
            <div class="calendar-legend">
                <div class="legend-item"><span class="legend-color resignation"></span> R = Resignation Date</div>
                <div class="legend-item"><span class="legend-color last-work"></span> L = Last Working Day</div>
                <div class="legend-item"><span class="legend-color contract-end"></span> E = Contract End</div>
                <div class="legend-item"><span class="legend-color al"></span> AL = Annual Leave</div>
                <div class="legend-item"><span class="legend-color holiday"></span> Holiday Name (hover for full name)</div>
                <div class="legend-item"><span class="legend-color weekend"></span> Weekend</div>
            </div>
            <div id="calendar-content">
                ${calculatorInstance.generateCalendarView(firstScenario)}
            </div>
        `;
        resultsContent.appendChild(calendarCard);

        // Add glossary section
        const glossaryCard = document.createElement('div');
        glossaryCard.className = 'result-card';
        glossaryCard.innerHTML = `
            <h3>📖 Glossary - Understanding Your Resignation Terms</h3>
            <div class="glossary-content">
                <div class="glossary-section">
                    <h4>📅 Key Dates</h4>
                    <div class="glossary-grid">
                        <div class="glossary-item">
                            <strong>Resignation Date:</strong>
                            <span>The date you formally submit your resignation notice to your employer.</span>
                        </div>
                        <div class="glossary-item">
                            <strong>Last Working Day:</strong>
                            <span>The final day you physically work and are present in the office/workplace.</span>
                        </div>
                        <div class="glossary-item">
                            <strong>Contract End Date:</strong>
                            <span>The official end date of your employment contract (may extend beyond last working day if AL is paid out).</span>
                        </div>
                    </div>
                </div>

                <div class="glossary-section">
                    <h4>💼 Working & Salary Calculations</h4>
                    <div class="glossary-grid">
                        <div class="glossary-item">
                            <strong>Working Days:</strong>
                            <span>The actual number of business days you need to physically work during your notice period.</span>
                        </div>
                        <div class="glossary-item">
                            <strong>Total Salary Days:</strong>
                            <span>Working Days + AL Paid Out - represents total days you receive salary compensation for.</span>
                        </div>
                    </div>
                </div>

                <div class="glossary-note">
                    <p><strong>💡 Important:</strong> This tool provides estimates based on standard employment practices. Always verify calculations with your HR department and employment contract, as company policies may vary. Public holiday data is sourced from official government sources but should be confirmed for accuracy.</p>
                </div>
            </div>
        `;
        resultsContent.appendChild(glossaryCard);

        // Store scenarios globally for table interaction
        window.resignationScenarios = result.scenarios;
        window.resignationCalculator = calculatorInstance;
    }
});

// Global function to handle scenario selection from strategy cards (restored working version)
window.selectScenario = function(index) {
    const scenarios = window.resignationScenarios;
    const calculator = window.resignationCalculator;
    
    if (!scenarios || !calculator || !scenarios[index]) {
        console.error('Missing scenarios, calculator, or invalid index');
        return;
    }

    const selectedScenario = scenarios[index];
    
    // Update calendar title
    const calendarTitle = document.getElementById('calendar-title');
    if (calendarTitle) {
        calendarTitle.textContent = `📅 Calendar View - ${selectedScenario.name}`;
    }
    
    // Update calendar content
    const calendarContent = document.getElementById('calendar-content');
    if (calendarContent) {
        calendarContent.innerHTML = calculator.generateCalendarView(selectedScenario);
    }

    // Update strategy card highlighting
    const cards = document.querySelectorAll('.strategy-card');
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
    
    // Scroll to calendar view
    const calendarCard = document.getElementById('calendar-card');
    if (calendarCard) {
        calendarCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Custom tooltip functions for holiday names
window.showHolidayTooltip = function(element) {
    const existingTooltip = document.querySelector('.custom-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
    
    const holidayName = element.getAttribute('data-holiday');
    if (!holidayName) return;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.textContent = holidayName;
    tooltip.style.cssText = `
        position: absolute;
        background: #1f2937;
        color: white;
        padding: 6px 8px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
        white-space: nowrap;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = (rect.left + rect.width/2 - tooltip.offsetWidth/2) + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
};

window.hideHolidayTooltip = function(element) {
    const tooltip = document.querySelector('.custom-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}; 