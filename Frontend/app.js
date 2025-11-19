// State Management
const state = {
  currentUser: null,
  currentPage: 'landing',
  selectedMovie: null,
  selectedMood: null,
  currentTime: new Date(),
  timeOfDay: null,
  watchHistory: [],
  watchParty: null,
  aiChatOpen: false,
  aiMessages: [],
  searchQuery: '',
  selectedGenre: null,
  isPlaying: false,
  currentVideoTime: 0
};

// Mock Data
const movies = [
  {
    id: 1,
    title: "Inception",
    genre: ["Sci-Fi", "Thriller", "Action"],
    rating: 8.8,
    year: 2010,
    duration: 148,
    poster: "https://images.unsplash.com/photo-1586899028806-078a50cc6f1a?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&h=600&fit=crop",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
    director: "Christopher Nolan",
    reviews: [
      { author: "John D.", rating: 5, text: "Mind-bending masterpiece", sentiment: "positive" },
      { author: "Sarah M.", rating: 4, text: "Complex but engaging", sentiment: "positive" }
    ],
    mood: ["curious", "energized"],
    views: 2500000,
    trend: "↑ +25%"
  },
  {
  id: 11,
  title: "Avatar: The Way of Water",
  genre: ["Action", "Sci-Fi", "Adventure"],
  rating: 8.2,
  year: 2022,
  duration: 192,
  poster: "https://upload.wikimedia.org/wikipedia/en/9/9b/Avatar_The_Way_of_Water_poster.jpg",
  backdrop: "https://images.unsplash.com/photo-1614852207589-8c873e4d6a4e?w=1200&h=600&fit=crop",
  description: "Jake Sully and Ney'tiri must protect their family when an ancient threat returns to Pandora.",
  cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
  director: "James Cameron",
  reviews: [
    { author: "Harsha G.R.", rating: 5, text: "Visually stunning and emotional.", sentiment: "positive" },
    { author: "Maya R.", rating: 4, text: "Incredible world-building.", sentiment: "positive" }
  ],
  mood: ["curious", "inspired"],
  views: 2250000,
  trend: "↑ +12%"
},

  {
    id: 2,
    title: "The Shawshank Redemption",
    genre: ["Drama", "Crime"],
    rating: 9.3,
    year: 1994,
    duration: 142,
    poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1533050487297-86b450e467f1?w=1200&h=600&fit=crop",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    cast: ["Tim Robbins", "Morgan Freeman"],
    director: "Frank Darabont",
    reviews: [
      { author: "Mike T.", rating: 5, text: "One of the greatest films ever made", sentiment: "positive" }
    ],
    mood: ["happy", "inspired"],
    views: 1640000,
    trend: "→ Stable"
  },
  {
    id: 3,
    title: "Pulp Fiction",
    genre: ["Crime", "Drama"],
    rating: 8.9,
    year: 1994,
    duration: 154,
    poster: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1200&h=600&fit=crop",
    description: "The lives of two mob hitmen, a boxer, a gangster's wife intertwine in four tales of violence and redemption.",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    director: "Quentin Tarantino",
    reviews: [
      { author: "Chris P.", rating: 5, text: "Iconic and bold", sentiment: "positive" }
    ],
    mood: ["energized", "curious"],
    views: 1520000,
    trend: "↓ -5%"
  },
  {
    id: 4,
    title: "Forrest Gump",
    genre: ["Drama", "Comedy"],
    rating: 8.8,
    year: 1994,
    duration: 142,
    poster: "https://images.unsplash.com/photo-1553531889-e6cf89d45b3c?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1606402531236-3c38e10cbf51?w=1200&h=600&fit=crop",
    description: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.",
    cast: ["Tom Hanks", "Sally Field", "Gary Sinise"],
    director: "Robert Zemeckis",
    reviews: [
      { author: "Emma W.", rating: 5, text: "Heartwarming and inspiring", sentiment: "positive" }
    ],
    mood: ["happy", "inspired"],
    views: 1320000,
    trend: "↑ +8%"
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    year: 2008,
    duration: 152,
    poster: "https://images.unsplash.com/photo-1595638334544-05b88b30a5c4?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1533050488606-2744a0a29e75?w=1200&h=600&fit=crop",
    description: "When the menace known as The Joker wreaks havoc, Batman must accept one of the greatest psychological risks.",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    director: "Christopher Nolan",
    reviews: [
      { author: "David L.", rating: 5, text: "Best superhero movie ever", sentiment: "positive" }
    ],
    mood: ["energized", "curious"],
    views: 2100000,
    trend: "↑ +18%"
  },
  {
    id: 6,
    title: "Interstellar",
    genre: ["Sci-Fi", "Drama", "Adventure"],
    rating: 8.6,
    year: 2014,
    duration: 169,
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1533050487297-86b450e467f1?w=1200&h=600&fit=crop",
    description: "A team of explorers travel through a wormhole near Saturn to save humanity.",
    cast: ["Matthew McConaughey", "Jessica Chastain", "Anne Hathaway"],
    director: "Christopher Nolan",
    reviews: [
      { author: "Lisa K.", rating: 5, text: "Epic and emotional", sentiment: "positive" }
    ],
    mood: ["curious", "inspired"],
    views: 1850000,
    trend: "↑ +12%"
  },
  {
    id: 7,
    title: "The Matrix",
    genre: ["Sci-Fi", "Action"],
    rating: 8.7,
    year: 1999,
    duration: 136,
    poster: "https://images.unsplash.com/photo-1589990276299-a1d8b3a79e60?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1594909122845-11bda37a0d5f?w=1200&h=600&fit=crop",
    description: "A computer programmer learns about the true nature of reality and role in the war against its controllers.",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: "Lana Wachowski, Lilly Wachowski",
    reviews: [
      { author: "Tom R.", rating: 5, text: "Revolutionary cinema", sentiment: "positive" }
    ],
    mood: ["curious", "energized"],
    views: 1740000,
    trend: "↑ +15%"
  },
  {
    id: 8,
    title: "Spirited Away",
    genre: ["Animation", "Fantasy", "Adventure"],
    rating: 8.6,
    year: 2001,
    duration: 125,
    poster: "https://images.unsplash.com/photo-1580018603890-908d4d13593e?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1594909122845-11bda37a0d5f?w=1200&h=600&fit=crop",
    description: "A ten-year-old girl wanders into a world ruled by gods, witches, and spirits and has to survive to save her parents.",
    cast: ["Daveigh Chase", "Suzanne Pleshette"],
    director: "Hayao Miyazaki",
    reviews: [
      { author: "Ana G.", rating: 5, text: "Beautifully crafted", sentiment: "positive" }
    ],
    mood: ["happy", "inspired"],
    views: 1280000,
    trend: "→ Stable"
  },
  {
    id: 9,
    title: "Se7en",
    genre: ["Thriller", "Crime", "Drama"],
    rating: 8.6,
    year: 1995,
    duration: 127,
    poster: "https://static.vecteezy.com/system/resources/previews/013/797/031/non_2x/grh-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-free-vector.jpg",
    backdrop: "https://images.unsplash.com/photo-1595638334544-05b88b30a5c4?w=1200&h=600&fit=crop",
    description: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
    cast: ["Brad Pitt", "Morgan Freeman"],
    director: "David Fincher",
    reviews: [
      { author: "Marcus J.", rating: 5, text: "Dark and intense", sentiment: "positive" }
    ],
    mood: ["curious", "stressed"],
    views: 1180000,
    trend: "↑ +6%"
  },
  {
    id: 10,
    title: "The Godfather",
    genre: ["Crime", "Drama"],
    rating: 9.2,
    year: 1972,
    duration: 175,
    poster: "https://images.unsplash.com/photo-1552006917-ffba1e63d734?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1606402531236-3c38e10cbf51?w=1200&h=600&fit=crop",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    director: "Francis Ford Coppola",
    reviews: [
      { author: "Robert M.", rating: 5, text: "The greatest film ever made", sentiment: "positive" }
    ],
    mood: ["curious", "inspired"],
    views: 1920000,
    trend: "↑ +10%"
  }
];

const genres = ["Action", "Comedy", "Drama", "Sci-Fi", "Thriller", "Crime", "Animation", "Adventure", "Fantasy", "Horror"];

const predictedTrending = [
  { title: "Dune Part Two", reason: "Rising sci-fi interest + seasonal pattern", score: 94 },
  { title: "The Hunger Games: Ballad of Songbirds and Snakes", reason: "Franchise popularity + youth engagement", score: 91 },
  { title: "Killers of the Flower Moon", reason: "Award season momentum", score: 88 }
];

const moodData = {
  happy: { emoji: "😊", color: "#FFD700", description: "Feel-good stories, comedies, uplifting dramas" },
  sad: { emoji: "😢", color: "#4169E1", description: "Emotional dramas, heartfelt stories" },
  stressed: { emoji: "😰", color: "#DC143C", description: "Action-packed thrillers, intense dramas" },
  energized: { emoji: "⚡", color: "#FF4500", description: "Action movies, high-energy content" },
  curious: { emoji: "🤔", color: "#9370DB", description: "Sci-Fi, mysteries, mind-bending films" }
};

// Utility Functions
function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  if (hour >= 18 && hour < 22) return 'evening';
  return 'night';
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}

function getTimeBasedRecommendation() {
  const timeOfDay = getTimeOfDay();
  const recommendations = {
    morning: movies.filter(m => m.mood.includes('energized') || m.genre.includes('Action')),
    afternoon: movies.filter(m => m.mood.includes('happy') || m.genre.includes('Comedy')),
    evening: movies.filter(m => m.genre.includes('Thriller') || m.genre.includes('Sci-Fi')),
    night: movies.filter(m => m.mood.includes('happy') || m.genre.includes('Drama'))
  };
  return recommendations[timeOfDay] || movies;
}

function getMoodBasedMovies(mood) {
  if (!mood) return movies;
  return movies.filter(m => m.mood.includes(mood));
}

function searchMovies(query) {
  if (!query) return movies;
  const lowerQuery = query.toLowerCase();
  return movies.filter(m => 
    m.title.toLowerCase().includes(lowerQuery) ||
    m.description.toLowerCase().includes(lowerQuery) ||
    m.genre.some(g => g.toLowerCase().includes(lowerQuery))
  );
}

function filterByGenre(genre) {
  if (!genre) return movies;
  return movies.filter(m => m.genre.includes(genre));
}

function getSimilarMovies(movieId) {
  const movie = movies.find(m => m.id === movieId);
  if (!movie) return [];
  return movies
    .filter(m => m.id !== movieId && m.genre.some(g => movie.genre.includes(g)))
    .slice(0, 5);
}

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// AI Chatbot Logic
function getAIResponse(query) {
  const lowerQuery = query.toLowerCase();
  
  // Simple pattern matching for demo
  if (lowerQuery.includes('thriller') || lowerQuery.includes('suspense')) {
    const thrillers = movies.filter(m => m.genre.includes('Thriller'));
    return {
      text: `I found ${thrillers.length} thrilling movies for you! Here are my top recommendations:`,
      movies: thrillers.slice(0, 3)
    };
  }
  
  if (lowerQuery.includes('action')) {
    const action = movies.filter(m => m.genre.includes('Action'));
    return {
      text: `Perfect! Here are some action-packed movies:`,
      movies: action.slice(0, 3)
    };
  }
  
  if (lowerQuery.includes('sci-fi') || lowerQuery.includes('science fiction')) {
    const scifi = movies.filter(m => m.genre.includes('Sci-Fi'));
    return {
      text: `Here are some mind-bending sci-fi films:`,
      movies: scifi.slice(0, 3)
    };
  }
  
  if (lowerQuery.includes('inception') || lowerQuery.includes('similar to')) {
    return {
      text: `If you loved Inception, you'll enjoy these:`,
      movies: [movies[4], movies[6], movies[5]]
    };
  }
  
  if (lowerQuery.includes('happy') || lowerQuery.includes('feel good')) {
    const happy = movies.filter(m => m.mood.includes('happy'));
    return {
      text: `Here are some feel-good movies to lift your spirits:`,
      movies: happy.slice(0, 3)
    };
  }
  
  // Default response
  return {
    text: `Here are some popular recommendations based on your query:`,
    movies: movies.slice(0, 3)
  };
}

// Render Functions
function render() {
  const app = document.getElementById('app');
  
  switch(state.currentPage) {
    case 'landing':
      renderLandingPage(app);
      break;
    case 'login':
      renderLoginPage(app);
      break;
    case 'signup':
      renderSignupPage(app);
      break;
    case 'dashboard':
      renderDashboard(app);
      break;
    case 'detail':
      renderDetailPage(app);
      break;
    case 'player':
      renderPlayerPage(app);
      break;
    case 'search':
      renderSearchPage(app);
      break;
    case 'profile':
      renderProfilePage(app);
      break;
    case 'watch-party':
      renderWatchParty(app);
      break;
    default:
      renderLandingPage(app);
  }
  
  // Render AI Concierge (always visible except on landing)
  if (state.currentUser && state.currentPage !== 'landing') {
    renderAIConcierge();
  }
}

function renderNavbar(isLoggedIn = false) {
  return `
    <nav class="navbar" id="navbar">
      <a href="#" class="navbar-brand" onclick="navigateTo('${isLoggedIn ? 'dashboard' : 'landing'}'); return false;">GRH</a>
      ${isLoggedIn ? `
        <ul class="navbar-nav">
          <li><a href="#" class="nav-link" onclick="navigateTo('dashboard'); return false;">Home</a></li>
          <li><a href="#" class="nav-link" onclick="navigateTo('search'); return false;">Browse</a></li>
          <li><a href="#" class="nav-link" onclick="showMoodSelector(); return false;">Mood</a></li>
        </ul>
      ` : ''}
      <div class="navbar-actions">
        ${isLoggedIn ? `
          <button class="search-btn" onclick="navigateTo('search')">🔍</button>
          <button class="notification-btn">🔔</button>
          <div class="profile-dropdown">
            <button class="profile-btn" onclick="toggleProfileMenu()">👤</button>
            <div class="profile-menu hidden" id="profileMenu">
              <div class="profile-menu-item" onclick="navigateTo('profile')">Profile</div>
              <div class="profile-menu-item" onclick="logout()">Logout</div>
            </div>
          </div>
        ` : `
          <button class="btn btn-secondary" onclick="navigateTo('login')">Sign In</button>
        `}
      </div>
    </nav>
  `;
}

function renderLandingPage(app) {
  const featuredMovie = movies[0];
  const trending = movies.slice(0, 5);
  
  app.innerHTML = `
    ${renderNavbar(false)}
    
    <section class="hero">
      <img src="${featuredMovie.backdrop}" alt="${featuredMovie.title}" class="hero-background">
      <div class="hero-gradient"></div>
      <div class="hero-content">
        <h1 class="hero-title">${featuredMovie.title}</h1>
        <p class="hero-description">${featuredMovie.description}</p>
        <div class="hero-buttons">
          <button class="btn btn-primary" onclick="navigateTo('signup')">Join Now</button>
          <button class="btn btn-secondary" onclick="viewMovie(${featuredMovie.id})">Watch Preview</button>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Trending Now</h2>
      </div>
      <div class="carousel">
        <div class="carousel-track">
          ${trending.map(movie => renderMovieCard(movie)).join('')}
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Browse by Genre</h2>
      </div>
      <div class="genre-quick-select">
        ${genres.slice(0, 8).map(genre => `
          <button class="genre-btn" onclick="navigateTo('signup')">${genre}</button>
        `).join('')}
      </div>
    </section>
    
    ${renderFooter()}
  `;
  
  setupNavbarScroll();
}

function renderLoginPage(app) {
  app.innerHTML = `
    ${renderNavbar(false)}
    
    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">Welcome Back</h1>
        <form onsubmit="login(event)">
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-input" id="loginEmail" required placeholder="your@email.com">
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" id="loginPassword" required placeholder="••••••••">
          </div>
          <button type="submit" class="btn btn-primary btn-full">Sign In</button>
        </form>
        <div class="auth-divider">OR</div>
        <button class="btn btn-secondary btn-full" onclick="loginAsGuest()">Continue as Guest</button>
        <div class="auth-link">
          Don't have an account? <a href="#" onclick="navigateTo('signup'); return false;">Sign Up</a>
        </div>
      </div>
    </div>
  `;
}

function renderSignupPage(app) {
  app.innerHTML = `
    ${renderNavbar(false)}
    
    <div class="auth-container">
      <div class="auth-card">
        <h1 class="auth-title">Join GRH</h1>
        <form onsubmit="signup(event)">
          <div class="form-group">
            <label class="form-label">Name</label>
            <input type="text" class="form-input" id="signupName" required placeholder="Your Name">
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-input" id="signupEmail" required placeholder="your@email.com">
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" id="signupPassword" required placeholder="••••••••">
          </div>
          <button type="submit" class="btn btn-primary btn-full">Create Account</button>
        </form>
        <div class="auth-divider">OR</div>
        <button class="btn btn-secondary btn-full" onclick="loginAsGuest()">Continue as Guest</button>
        <div class="auth-link">
          Already have an account? <a href="#" onclick="navigateTo('login'); return false;">Sign In</a>
        </div>
      </div>
    </div>
  `;
}

function renderDashboard(app) {
  const timeOfDay = getTimeOfDay();
  const greeting = getGreeting();
  const timeBasedMovies = getTimeBasedRecommendation();
  const moodMovies = state.selectedMood ? getMoodBasedMovies(state.selectedMood) : timeBasedMovies;
  const trendingMovies = [...movies].sort((a, b) => b.views - a.views).slice(0, 5);
  
  app.innerHTML = `
    ${renderNavbar(true)}
    
    <div class="dashboard-greeting theme-${timeOfDay}">
      <h1 class="greeting-text">${greeting}, ${state.currentUser.name}!</h1>
      <p class="greeting-subtext">Based on the ${timeOfDay}, we recommend ${timeOfDay === 'night' ? 'relaxing' : timeOfDay === 'morning' ? 'energetic' : 'varied'} content
        ${state.selectedMood ? `
          <span class="mood-indicator" style="background: ${moodData[state.selectedMood].color}33; border: 1px solid ${moodData[state.selectedMood].color};">
            ${moodData[state.selectedMood].emoji} ${state.selectedMood.charAt(0).toUpperCase() + state.selectedMood.slice(1)} mode
          </span>
        ` : ''}
      </p>
      <div class="mood-selector">
        ${Object.keys(moodData).map(mood => `
          <button class="mood-btn ${state.selectedMood === mood ? 'active' : ''}" onclick="selectMood('${mood}')">
            <span>${moodData[mood].emoji}</span>
            <span>${mood.charAt(0).toUpperCase() + mood.slice(1)}</span>
          </button>
        `).join('')}
        ${state.selectedMood ? '<button class="mood-btn" onclick="selectMood(null)">✕ Clear</button>' : ''}
      </div>
    </div>
    
    ${state.watchHistory.length > 0 ? `
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">Continue Watching</h2>
        </div>
        <div class="carousel">
          <div class="carousel-track">
            ${state.watchHistory.slice(0, 5).map(item => {
              const movie = movies.find(m => m.id === item.movieId);
              return renderMovieCard(movie, item.progress);
            }).join('')}
          </div>
        </div>
      </section>
    ` : ''}
    
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">${state.selectedMood ? `${state.selectedMood.charAt(0).toUpperCase() + state.selectedMood.slice(1)} Picks` : 'Recommended for You'}</h2>
      </div>
      <div class="carousel">
        <div class="carousel-track">
          ${moodMovies.slice(0, 8).map(movie => renderMovieCard(movie)).join('')}
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Trending Now</h2>
        <a href="#" class="view-all-btn" onclick="navigateTo('search'); return false;">View All</a>
      </div>
      ${trendingMovies.map((movie, index) => `
        <div class="trending-item" onclick="viewMovie(${movie.id})">
          <div class="trending-rank">${index + 1}</div>
          <img src="${movie.poster}" alt="${movie.title}" class="trending-poster">
          <div class="trending-info">
            <div class="trending-title">${movie.title}</div>
            <div class="trending-stats">
              <span>⭐ ${movie.rating}</span>
              <span>👁️ ${(movie.views / 1000000).toFixed(1)}M views</span>
              <span class="trend-badge ${movie.trend.includes('↑') ? 'trend-up' : movie.trend.includes('↓') ? 'trend-down' : 'trend-stable'}">
                ${movie.trend}
              </span>
            </div>
          </div>
        </div>
      `).join('')}
    </section>
    
    <section class="section" style="background: linear-gradient(135deg, rgba(147, 112, 219, 0.1) 0%, rgba(65, 105, 225, 0.1) 100%);">
      <div class="section-header">
        <h2 class="section-title">🔮 Predicted to Trend Next Week</h2>
      </div>
      ${predictedTrending.map(item => `
        <div class="trending-item" style="cursor: default;">
          <div class="predicted-badge">🔮 ${item.score}% confidence</div>
          <div class="trending-info" style="margin-left: 16px;">
            <div class="trending-title">${item.title}</div>
            <div class="trending-stats">
              <span style="color: var(--color-text-muted);">${item.reason}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </section>
    
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Popular Genres</h2>
      </div>
      <div class="genre-quick-select">
        ${genres.map(genre => `
          <button class="genre-btn" onclick="filterGenre('${genre}')">${genre}</button>
        `).join('')}
      </div>
    </section>
    
    ${renderFooter()}
  `;
  
  setupNavbarScroll();
}

function renderDetailPage(app) {
  const movie = state.selectedMovie;
  if (!movie) {
    navigateTo('dashboard');
    return;
  }
  
  const similar = getSimilarMovies(movie.id);
  const watchHistoryItem = state.watchHistory.find(item => item.movieId === movie.id);
  
  app.innerHTML = `
    ${renderNavbar(true)}
    
    <section class="detail-hero">
      <img src="${movie.backdrop}" alt="${movie.title}" class="detail-backdrop">
      <div class="hero-gradient"></div>
      <div class="detail-content">
        <h1 class="detail-title">${movie.title}</h1>
        <div class="detail-meta">
          <div class="detail-rating">
            <span>⭐</span>
            <span>${movie.rating}</span>
          </div>
          <span>${movie.year}</span>
          <span>${formatDuration(movie.duration)}</span>
        </div>
        <div class="genre-tags">
          ${movie.genre.map(g => `<span class="genre-tag">${g}</span>`).join('')}
        </div>
        <p class="detail-description">${movie.description}</p>
        <div class="detail-actions">
          <button class="btn btn-primary" onclick="playMovie(${movie.id})">
            ${watchHistoryItem ? '▶️ Resume' : '▶️ Play Now'}
          </button>
          <button class="btn btn-secondary" onclick="addToWatchlist(${movie.id})">+ Watchlist</button>
          <button class="btn btn-secondary" onclick="createWatchParty(${movie.id})">👥 Watch Party</button>
        </div>
      </div>
    </section>
    
    <section class="section">
      <h2 class="section-title">Cast & Crew</h2>
      <div class="cast-grid">
        ${movie.cast.map((actor, i) => `
          <div class="cast-item">
            <div class="cast-avatar">${actor.charAt(0)}</div>
            <div class="cast-name">${actor}</div>
          </div>
        `).join('')}
      </div>
      <p style="margin-top: 16px; color: var(--color-text-muted);"><strong>Director:</strong> ${movie.director}</p>
    </section>
    
    <section class="section reviews-section">
      <h2 class="section-title">Reviews</h2>
      ${movie.reviews.map(review => `
        <div class="review-item">
          <div class="review-header">
            <span class="review-author">👤 ${review.author}</span>
            <span class="review-rating">${'⭐'.repeat(review.rating)}</span>
          </div>
          <p class="review-text">${review.text}</p>
        </div>
      `).join('')}
    </section>
    
    ${similar.length > 0 ? `
      <section class="similar-content">
        <h2 class="section-title" style="padding: 0 48px 24px;">Similar Titles</h2>
        <div class="carousel" style="padding: 0 48px;">
          <div class="carousel-track">
            ${similar.map(movie => renderMovieCard(movie)).join('')}
          </div>
        </div>
      </section>
    ` : ''}
    
    ${renderFooter()}
  `;
  
  setupNavbarScroll();
  
  // Show resume modal if there's watch history
  if (watchHistoryItem && watchHistoryItem.progress > 10) {
    setTimeout(() => showResumeModal(movie, watchHistoryItem), 500);
  }
}

function renderPlayerPage(app) {
  const movie = state.selectedMovie;
  if (!movie) {
    navigateTo('dashboard');
    return;
  }
  
  const similar = getSimilarMovies(movie.id);
  
  app.innerHTML = `
    ${renderNavbar(true)}
    
    <div class="player-container">
      <div class="video-wrapper">
        <div class="video-player">
          <div class="video-element">
            🎬 Video Player Demo<br>
            <small style="font-size: 14px; margin-top: 8px;">${movie.title}</small>
          </div>
          <div class="player-controls">
            <div class="progress-bar" onclick="seekVideo(event)">
              <div class="progress-filled" id="progressBar" style="width: 0%"></div>
            </div>
            <div class="controls-bottom">
              <div class="controls-left">
                <button class="control-btn" onclick="togglePlay()">▶️</button>
                <button class="control-btn">🔊</button>
                <span class="time-display" id="timeDisplay">0:00 / ${formatDuration(movie.duration)}</span>
              </div>
              <div class="controls-right">
                <button class="control-btn" onclick="changeSpeed()">1x</button>
                <button class="control-btn">CC</button>
                <button class="control-btn">⚙️</button>
                <button class="control-btn">⛶</button>
              </div>
            </div>
          </div>
          <button class="skip-intro-btn" id="skipIntroBtn" style="display: none;" onclick="skipIntro()">Skip Intro</button>
        </div>
      </div>
      
      <section class="section">
        <h2 class="section-title">${movie.title}</h2>
        <p style="color: var(--color-text-muted); margin-top: 8px;">${movie.description}</p>
      </section>
      
      ${similar.length > 0 ? `
        <section class="section">
          <h2 class="section-title">You May Also Like</h2>
          <div class="carousel">
            <div class="carousel-track">
              ${similar.map(movie => renderMovieCard(movie)).join('')}
            </div>
          </div>
        </section>
      ` : ''}
    </div>
  `;
  
  setupNavbarScroll();
  startVideoPlayback();
}

function renderSearchPage(app) {
  const results = state.searchQuery ? searchMovies(state.searchQuery) : 
                  state.selectedGenre ? filterByGenre(state.selectedGenre) : movies;
  
  app.innerHTML = `
    ${renderNavbar(true)}
    
    <div class="search-container">
      <div class="search-header">
        <input type="text" class="search-bar" placeholder="Search for movies, shows, genres..." 
               value="${state.searchQuery}" oninput="handleSearch(this.value)">
        <div class="filters">
          ${genres.map(genre => `
            <button class="filter-btn ${state.selectedGenre === genre ? 'active' : ''}" 
                    onclick="filterGenre('${genre}')">${genre}</button>
          `).join('')}
          ${state.selectedGenre ? '<button class="filter-btn" onclick="filterGenre(null)">✕ Clear</button>' : ''}
        </div>
      </div>
      
      <div class="search-results">
        ${results.map(movie => renderMovieCard(movie)).join('')}
      </div>
      
      ${results.length === 0 ? `
        <div style="text-align: center; padding: 48px; color: var(--color-text-muted);">
          <h2>No results found</h2>
          <p>Try adjusting your search or filters</p>
        </div>
      ` : ''}
    </div>
    
    ${renderFooter()}
  `;
  
  setupNavbarScroll();
}

function renderProfilePage(app) {
  const user = state.currentUser;
  const watchedCount = state.watchHistory.length;
  const totalMinutes = state.watchHistory.reduce((sum, item) => {
    const movie = movies.find(m => m.id === item.movieId);
    return sum + (movie ? movie.duration * (item.progress / 100) : 0);
  }, 0);
  
  app.innerHTML = `
    ${renderNavbar(true)}
    
    <div class="profile-container">
      <div class="profile-header">
        <div class="profile-avatar-large">${user.name.charAt(0)}</div>
        <div class="profile-info">
          <h1>${user.name}</h1>
          <p style="color: var(--color-text-muted);">${user.email}</p>
          <div class="profile-stats">
            <div class="stat-item">
              <div class="stat-value">${watchedCount}</div>
              <div class="stat-label">Watched</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">${Math.round(totalMinutes / 60)}h</div>
              <div class="stat-label">Watch Time</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">Premium</div>
              <div class="stat-label">Subscription</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="profile-sections">
        <div class="profile-card">
          <h2>Watch History</h2>
          ${state.watchHistory.length > 0 ? state.watchHistory.map(item => {
            const movie = movies.find(m => m.id === item.movieId);
            if (!movie) return '';
            return `
              <div class="watch-history-item" onclick="viewMovie(${movie.id})">
                <img src="${movie.poster}" alt="${movie.title}" class="history-poster">
                <div class="history-info">
                  <div class="history-title">${movie.title}</div>
                  <div style="font-size: 12px; color: var(--color-text-muted);">${item.lastWatched}</div>
                  <div class="history-progress">
                    <div class="history-progress-bar" style="width: ${item.progress}%"></div>
                  </div>
                </div>
              </div>
            `;
          }).join('') : '<p style="color: var(--color-text-muted);">No watch history yet</p>'}
        </div>
        
        <div class="profile-card">
          <h2>Settings</h2>
          <div class="form-group">
            <label class="form-label">Default Video Quality</label>
            <select class="form-input">
              <option>1080p (HD)</option>
              <option>720p</option>
              <option>480p</option>
              <option>Auto</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Language Preference</label>
            <select class="form-input">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <button class="btn btn-primary" style="margin-top: 16px;">Save Settings</button>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 48px;">
        <button class="btn btn-secondary" onclick="logout()">Logout</button>
      </div>
    </div>
    
    ${renderFooter()}
  `;
  
  setupNavbarScroll();
}

function renderWatchParty(app) {
  const movie = state.selectedMovie;
  if (!movie) {
    navigateTo('dashboard');
    return;
  }
  
  const party = state.watchParty || {
    name: `${movie.title} Party`,
    participants: [state.currentUser.name, 'Sarah M.', 'John D.'],
    messages: [
      { user: 'Sarah M.', text: 'Hey everyone! 👋', time: '8:30 PM' },
      { user: 'John D.', text: 'Ready to watch!', time: '8:31 PM' }
    ]
  };
  
  state.watchParty = party;
  
  app.innerHTML = `
    ${renderNavbar(true)}
    
    <div class="watch-party-container">
      <div class="party-video-section">
        <div class="video-wrapper" style="max-width: 100%;">
          <div class="video-player">
            <div class="video-element">
              🎬 Watch Party: ${movie.title}
            </div>
            <div class="player-controls">
              <div class="progress-bar" onclick="seekVideo(event)">
                <div class="progress-filled" id="progressBar" style="width: 0%"></div>
              </div>
              <div class="controls-bottom">
                <div class="controls-left">
                  <button class="control-btn" onclick="togglePlay()">▶️</button>
                  <button class="control-btn">🔊</button>
                  <span class="time-display" id="timeDisplay">0:00 / ${formatDuration(movie.duration)}</span>
                </div>
                <div class="controls-right">
                  <button class="control-btn">⚙️</button>
                  <button class="control-btn">⛶</button>
                </div>
              </div>
            </div>
            <div id="emojiReactions"></div>
          </div>
        </div>
      </div>
      
      <div class="party-chat-section">
        <div class="party-chat-header">
          <div class="party-chat-title">${party.name}</div>
          <div class="party-participants">
            ${party.participants.map(p => `<span class="participant-badge">👤 ${p}</span>`).join('')}
          </div>
        </div>
        
        <div class="party-chat-messages" id="partyChatMessages">
          ${party.messages.map(msg => `
            <div class="chat-message">
              <div class="chat-avatar">${msg.user.charAt(0)}</div>
              <div class="chat-content">
                <div class="chat-author">${msg.user}</div>
                <div class="chat-text">${msg.text}</div>
                <div class="chat-time">${msg.time}</div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="party-chat-input-container">
          <div class="reaction-picker">
            <button class="reaction-btn" onclick="sendReaction('❤️')">❤️</button>
            <button class="reaction-btn" onclick="sendReaction('😂')">😂</button>
            <button class="reaction-btn" onclick="sendReaction('😮')">😮</button>
            <button class="reaction-btn" onclick="sendReaction('😢')">😢</button>
            <button class="reaction-btn" onclick="sendReaction('🔥')">🔥</button>
          </div>
          <div style="display: flex; gap: 8px;">
            <input type="text" class="ai-chat-input" id="partyChatInput" placeholder="Type a message...">
            <button class="ai-send-btn" onclick="sendChatMessage()">➤</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  setupNavbarScroll();
  startVideoPlayback();
}

function renderMovieCard(movie, progress = null) {
  return `
    <div class="movie-card" onclick="viewMovie(${movie.id})">
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
      ${progress ? `
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: rgba(255,255,255,0.2);">
          <div style="height: 100%; background: var(--color-accent); width: ${progress}%;"></div>
        </div>
      ` : ''}
      <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-meta">
          <span class="movie-rating">
            <span>⭐</span>
            <span>${movie.rating}</span>
          </span>
          <span>${movie.year}</span>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Company</h3>
          <ul class="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Support</h3>
          <ul class="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Legal</h3>
          <ul class="footer-links">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <ul class="footer-links">
            <li><a href="#" target="_blank">Twitter</a></li>
            <li><a href="#" target="_blank">Instagram</a></li>
            <li><a href="#" target="_blank">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2025 GRH Entertainment. All rights reserved.
      </div>
    </footer>
  `;
}

function renderAIConcierge() {
  let concierge = document.getElementById('aiConcierge');
  if (!concierge) {
    concierge = document.createElement('div');
    concierge.id = 'aiConcierge';
    concierge.className = 'ai-concierge';
    document.body.appendChild(concierge);
  }
  
  concierge.innerHTML = `
    <div class="ai-bubble" onclick="toggleAIChat()">🤖</div>
    <div class="ai-chat-panel hidden" id="aiChatPanel">
      <div class="ai-chat-header">
        <div class="ai-chat-title">AI Content Concierge</div>
        <button class="ai-close-btn" onclick="toggleAIChat()">✕</button>
      </div>
      <div class="ai-chat-messages" id="aiChatMessages">
        ${state.aiMessages.length === 0 ? `
          <div class="ai-message">
            <div class="ai-avatar">🤖</div>
            <div class="ai-message-content">
              Hi! I'm your AI concierge. I can help you find the perfect content. Try asking me something!
            </div>
          </div>
        ` : state.aiMessages.map(msg => `
          <div class="ai-message ${msg.type}">
            <div class="ai-avatar">${msg.type === 'user' ? '👤' : '🤖'}</div>
            <div class="ai-message-content">
              ${msg.text}
              ${msg.movies ? `
                <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 8px;">
                  ${msg.movies.map(m => `
                    <div style="padding: 8px; background: var(--color-card-bg); border-radius: 8px; cursor: pointer;" onclick="viewMovie(${m.id})">
                      <strong>${m.title}</strong><br>
                      <small style="color: var(--color-text-muted);">⭐ ${m.rating} • ${m.year}</small>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="ai-suggestions">
        <button class="ai-suggestion-btn" onclick="sendAIMessage('Find me a thriller')">🎬 Find me a thriller</button>
        <button class="ai-suggestion-btn" onclick="sendAIMessage('Suggest action movies from the 90s')">🎭 Action from 90s</button>
        <button class="ai-suggestion-btn" onclick="sendAIMessage('What is similar to Inception?')">🔍 Similar to Inception</button>
      </div>
      <div class="ai-chat-input-container">
        <input type="text" class="ai-chat-input" id="aiChatInput" placeholder="Ask me anything..." onkeypress="if(event.key==='Enter') sendAIMessage()">
        <button class="ai-send-btn" onclick="sendAIMessage()">➤</button>
      </div>
    </div>
  `;
}

// Event Handlers
function navigateTo(page) {
  state.currentPage = page;
  render();
  window.scrollTo(0, 0);
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  state.currentUser = { name: email.split('@')[0], email };
  navigateTo('dashboard');
}

function signup(event) {
  event.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  state.currentUser = { name, email };
  navigateTo('dashboard');
}

function loginAsGuest() {
  state.currentUser = { name: 'Guest', email: 'guest@grh.com' };
  navigateTo('dashboard');
}

function logout() {
  state.currentUser = null;
  state.watchHistory = [];
  state.selectedMood = null;
  state.aiMessages = [];
  navigateTo('landing');
}

function viewMovie(movieId) {
  state.selectedMovie = movies.find(m => m.id === movieId);
  navigateTo('detail');
}

function playMovie(movieId) {
  state.selectedMovie = movies.find(m => m.id === movieId);
  navigateTo('player');
}

function createWatchParty(movieId) {
  state.selectedMovie = movies.find(m => m.id === movieId);
  navigateTo('watch-party');
}

function selectMood(mood) {
  state.selectedMood = mood;
  render();
}

function filterGenre(genre) {
  state.selectedGenre = genre;
  state.searchQuery = '';
  if (state.currentPage !== 'search') {
    navigateTo('search');
  } else {
    render();
  }
}

function handleSearch(query) {
  state.searchQuery = query;
  state.selectedGenre = null;
  render();
}

function addToWatchlist(movieId) {
  alert('Added to your watchlist!');
}

function toggleProfileMenu() {
  const menu = document.getElementById('profileMenu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function setupNavbarScroll() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
}

function toggleAIChat() {
  const panel = document.getElementById('aiChatPanel');
  if (panel) {
    panel.classList.toggle('hidden');
    state.aiChatOpen = !state.aiChatOpen;
  }
}

function sendAIMessage(message) {
  const input = document.getElementById('aiChatInput');
  const msg = message || (input ? input.value : '');
  
  if (!msg.trim()) return;
  
  // Add user message
  state.aiMessages.push({ type: 'user', text: msg });
  
  // Clear input
  if (input) input.value = '';
  
  // Get AI response
  const response = getAIResponse(msg);
  
  setTimeout(() => {
    state.aiMessages.push({ type: 'ai', text: response.text, movies: response.movies });
    renderAIConcierge();
    
    // Scroll to bottom
    const messagesDiv = document.getElementById('aiChatMessages');
    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }, 500);
  
  renderAIConcierge();
}

function showResumeModal(movie, watchItem) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal">
      <h2>Continue Watching?</h2>
      <p>You were watching <strong>${movie.title}</strong> at ${formatTime(movie.duration * 60 * watchItem.progress / 100)}.</p>
      <p style="color: var(--color-text-muted);">Scene: During the ${watchItem.progress > 50 ? 'climax' : 'opening'} sequence</p>
      <div class="modal-actions">
        <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Start Over</button>
        <button class="btn btn-primary" onclick="playMovie(${movie.id}); this.closest('.modal-overlay').remove();">Resume</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function togglePlay() {
  state.isPlaying = !state.isPlaying;
  // In a real implementation, this would control video playback
}

function seekVideo(event) {
  const bar = event.currentTarget;
  const rect = bar.getBoundingClientRect();
  const percent = (event.clientX - rect.left) / rect.width;
  state.currentVideoTime = percent * state.selectedMovie.duration * 60;
}

function changeSpeed() {
  alert('Speed options: 0.5x, 1x, 1.5x, 2x');
}

function skipIntro() {
  state.currentVideoTime += 90; // Skip 90 seconds
  alert('Intro skipped!');
}

function startVideoPlayback() {
  // Simulate video playback
  let time = 0;
  const interval = setInterval(() => {
    if (!state.isPlaying) return;
    
    time++;
    state.currentVideoTime = time;
    
    const progressBar = document.getElementById('progressBar');
    const timeDisplay = document.getElementById('timeDisplay');
    const skipIntroBtn = document.getElementById('skipIntroBtn');
    
    if (progressBar && state.selectedMovie) {
      const percent = (time / (state.selectedMovie.duration * 60)) * 100;
      progressBar.style.width = percent + '%';
    }
    
    if (timeDisplay && state.selectedMovie) {
      timeDisplay.textContent = `${formatTime(time)} / ${formatDuration(state.selectedMovie.duration)}`;
    }
    
    // Show skip intro button at 10 seconds
    if (skipIntroBtn && time >= 10 && time <= 100) {
      skipIntroBtn.style.display = 'block';
    } else if (skipIntroBtn) {
      skipIntroBtn.style.display = 'none';
    }
    
    // Add to watch history
    if (time % 30 === 0 && state.selectedMovie) {
      const existingIndex = state.watchHistory.findIndex(item => item.movieId === state.selectedMovie.id);
      const progress = Math.min((time / (state.selectedMovie.duration * 60)) * 100, 100);
      const watchItem = {
        movieId: state.selectedMovie.id,
        progress: Math.round(progress),
        lastWatched: new Date().toLocaleString()
      };
      
      if (existingIndex >= 0) {
        state.watchHistory[existingIndex] = watchItem;
      } else {
        state.watchHistory.unshift(watchItem);
      }
    }
    
    if (state.currentPage !== 'player' && state.currentPage !== 'watch-party') {
      clearInterval(interval);
    }
  }, 1000);
}

function sendReaction(emoji) {
  const container = document.getElementById('emojiReactions');
  if (container) {
    const reaction = document.createElement('div');
    reaction.className = 'emoji-reactions';
    reaction.textContent = emoji;
    container.appendChild(reaction);
    
    setTimeout(() => {
      reaction.remove();
    }, 2000);
  }
  
  // Add to chat
  if (state.watchParty) {
    state.watchParty.messages.push({
      user: state.currentUser.name,
      text: `Reacted with ${emoji}`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    
    const messagesDiv = document.getElementById('partyChatMessages');
    if (messagesDiv) {
      const msg = state.watchParty.messages[state.watchParty.messages.length - 1];
      messagesDiv.innerHTML += `
        <div class="chat-message">
          <div class="chat-avatar">${msg.user.charAt(0)}</div>
          <div class="chat-content">
            <div class="chat-author">${msg.user}</div>
            <div class="chat-text">${msg.text}</div>
            <div class="chat-time">${msg.time}</div>
          </div>
        </div>
      `;
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }
}

function sendChatMessage() {
  const input = document.getElementById('partyChatInput');
  if (!input || !input.value.trim()) return;
  
  if (state.watchParty) {
    state.watchParty.messages.push({
      user: state.currentUser.name,
      text: input.value,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    
    const messagesDiv = document.getElementById('partyChatMessages');
    if (messagesDiv) {
      const msg = state.watchParty.messages[state.watchParty.messages.length - 1];
      messagesDiv.innerHTML += `
        <div class="chat-message">
          <div class="chat-avatar">${msg.user.charAt(0)}</div>
          <div class="chat-content">
            <div class="chat-author">${msg.user}</div>
            <div class="chat-text">${msg.text}</div>
            <div class="chat-time">${msg.time}</div>
          </div>
        </div>
      `;
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }
  
  input.value = '';
}

function showMoodSelector() {
  navigateTo('dashboard');
  setTimeout(() => {
    const moodSelector = document.querySelector('.mood-selector');
    if (moodSelector) {
      moodSelector.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 100);
}

// Initialize App
render();