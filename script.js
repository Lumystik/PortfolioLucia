function openModal(projectId) {
    document.getElementById('project-modal').style.display = 'flex';
    
    // Hide all project details
    const projectDetails = document.querySelectorAll('.project-details');
    projectDetails.forEach(detail => detail.style.display = 'none');
    
    // Show the selected project details
    document.getElementById(`${projectId}-details`).style.display = 'block';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}
