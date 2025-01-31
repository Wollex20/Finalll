// Background slider functionality
const images = [
  'img/w3.jpg',
  'img/w1.jpg',
  'img/w2.jpg'
];

let currentIndex = 0;

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  const backgroundSlider = document.getElementById('background-slider');
  backgroundSlider.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Initialize background slider
document.addEventListener('DOMContentLoaded', () => {
  const backgroundSlider = document.getElementById('background-slider');
  backgroundSlider.style.backgroundImage = `url(${images[currentIndex]})`;
  setInterval(changeBackground, 4000);
});

// Skills animation
window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills-section');
  const skillsContent = document.querySelector('.skills-content');
  const skillBars = document.querySelectorAll('.progress');

  // Check if the skills section is in the viewport
  const sectionPosition = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionPosition < windowHeight - 100) {
    skillBars.forEach(bar => {
      const skillValue = bar.getAttribute('data-skill');
      bar.style.width = `${skillValue}%`;
    });
  }
});

// Projects filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  // Set up category data for each project
  const projects = document.querySelectorAll('.projects-2024-item');
  const categories = ['All', 'Work ideas', 'Mockup', 'PSD Design', 'Logo', 'Presentation', 'Icons'];
  
  // Assign categories to projects
  projects.forEach((project, index) => {
    if (index === 0) {
      project.setAttribute('data-category', 'Mockup');
    } else if (index === 1) {
      project.setAttribute('data-category', 'Work ideas');
    } else if (index === 2) {
      project.setAttribute('data-category', 'PSD Design');
    } else if (index === 3) {
      project.setAttribute('data-category', 'Logo');
    } else if (index === 4) {
      project.setAttribute('data-category', 'Presentation');
    } else if (index === 5) {
      project.setAttribute('data-category', 'Icons');
    }
  });

  // Set up click handlers for category filtering
  const categoryLinks = document.querySelectorAll('.projects-2024-nav li');
  
  categoryLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all links
      categoryLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      this.classList.add('active');
      
      const selectedCategory = this.textContent;
      
      projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        
        if (selectedCategory === 'All' || selectedCategory === projectCategory) {
          project.classList.remove('hidden');
        } else {
          project.classList.add('hidden');
        }
      });
    });
  });

  // Add hover effect for heart icons
  const hearts = document.querySelectorAll('.projects-2024-heart');
  hearts.forEach(heart => {
    heart.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('active');
      const path = this.querySelector('path');
      if (this.classList.contains('active')) {
        path.setAttribute('fill', '#FF3366');
      } else {
        path.setAttribute('fill', 'none');
      }
    });
  });
});

// Contact form functionality
function sendMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const website = document.getElementById('website').value;

  // Add console.log to check the data being sent
  console.log('Sending data:', {
    title: name,
    body: message,
    userId: 1
  });

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: name,
      body: message,
      userId: 1
    })
  })
  .then(response => {
    // Log the response status
    console.log('Response status:', response.status);
    return response.json();
  })
  .then(data => {
    // Log the response data
    console.log('Response data:', data);
    
    // Show success modal
    document.getElementById('success-modal').style.display = 'block';
    
    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('website').value = '';
  });
}

function closeModal() {
  document.getElementById('success-modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    // Testimonials data
    const testimonials = [
        {
            image: 'img/per1.png',
            name: 'John Doe',
            role: 'Web Developer',
            quote: '"The website is absolutely fantastic! I had a great experience exploring it, and I truly appreciate the effort put into its design and functionality. Everything runs smoothly, and the user interface is both visually appealing and easy to navigate."'
        },
        {
            image: 'img/per2.jpeg',
            name: 'Jane Smith',
            role: 'UI Designer',
            quote: '"I really liked your work! You have put in a tremendous amount of effort, and it truly shows in the quality of what you have created. The level of detail, precision, and creativity you have demonstrated is impressive."'
        },
        {
            image: 'img/per3.png',
            name: 'Mike Johnson',
            role: 'Product Manager',
            quote: '"I liked the hard work you have done. I will recommend you to my friends and other companies in the market to work with you."'
        }
    ];

    let currentSlide = 0;

    function updateSlide() {
        const testimonial = testimonials[currentSlide];
        
        // Update content
        const contentElement = document.querySelector('.testimonial-content p');
        const nameElement = document.querySelector('.author-details h3');
        const roleElement = document.querySelector('.author-details p');
        const imageElement = document.querySelector('.author-image');
        
        if (contentElement) contentElement.textContent = testimonial.quote;
        if (nameElement) nameElement.textContent = testimonial.name;
        if (roleElement) roleElement.textContent = testimonial.role;
        if (imageElement) imageElement.src = testimonial.image;
        
        // Update dots
        document.querySelectorAll('.nav-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonials.length;
        updateSlide();
    }

    // Initialize the slider
    updateSlide();

    // Start auto sliding
    setInterval(nextSlide, 4000);

    // Optional: Add click handlers for manual navigation
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlide();
        });
    });
});
