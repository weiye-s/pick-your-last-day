// Simple script to set today's date as default for resignation date
// This runs independently of the main calculator script
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    const resignationDateField = document.getElementById('desired-resignation-date');
    
    if (resignationDateField && !resignationDateField.value) {
        resignationDateField.value = today;
    }
}); 