function openTab(evt, tabName) {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Hide all tab contents
    tabContents.forEach(content => content.style.display = 'none');
    
    // Remove active class from all tab links
    tabLinks.forEach(link => link.classList.remove('active'));

    // Show the clicked tab content and add active class to clicked tab link
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

// Initialize the first tab to be open
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('accounts').style.display = 'block';
});

let featureCount = 1;

document.getElementById('add-feature').addEventListener('click', function() {
    if (featureCount >= 50) return;
    featureCount++;

    const featureRow = document.createElement('div');
    featureRow.classList.add('feature-row');
    featureRow.innerHTML = `
        <input type="text" name="feature_name[]" placeholder="Feature Name">
        <input type="text" name="feature_description[]" placeholder="Feature Description">
        <select name="feature_type[]">
            <option value="constraint">Constraint</option>
            <option value="keyword">Keyword</option>
            <option value="true_false">True / False</option>
        </select>
    `;
    document.getElementById('account-rows').appendChild(featureRow);
});

document.getElementById('add-contact-feature').addEventListener('click', function() {
    if (featureCount >= 50) return;
    featureCount++;

    const contactRow = document.createElement('div');
    contactRow.classList.add('feature-row');
    contactRow.innerHTML = `
        <input type="text" name="contact_feature_name[]" placeholder="Feature Name">
        <input type="text" name="contact_feature_description[]" placeholder="Feature Description">
        <select name="contact_feature_type[]">
            <option value="constraint">Constraint</option>
            <option value="keyword">Keyword</option>
            <option value="true_false">True / False</option>
        </select>
    `;
    document.getElementById('contact-rows').appendChild(contactRow);
});