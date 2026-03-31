// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// Multi-step Form Logic
let formData = {};

function selectOption(key, value) {
    formData[key] = value;
    console.log(`Selection: ${key} = ${value}`, formData);
}

function nextStep(step) {
    // Hide all steps
    document.querySelectorAll('.step-content').forEach(el => {
        el.classList.remove('active');
    });
    
    // Show target step
    const target = document.getElementById('step-' + step);
    if (target) {
        target.classList.add('active');
    }
    
    // Update progress bar
    const progress = document.getElementById('form-progress');
    if (progress) {
        if (step === 1) progress.style.width = '25%';
        if (step === 2) progress.style.width = '50%';
        if (step === 3) progress.style.width = '75%';
        if (step === 4) progress.style.width = '100%';
    }
}

// FAQ Toggle Logic
function toggleFaq(button) {
    const item = button.parentElement;
    
    // Close all others
    document.querySelectorAll('.faq-item').forEach(el => {
        if(el !== item) el.classList.remove('active');
    });

    // Toggle current
    item.classList.toggle('active');
}