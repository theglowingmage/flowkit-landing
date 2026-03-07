// Browse page Supabase integration
const SUPABASE_URL = 'https://jmlskgsffhuthqgexyfbg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbHNrZ3NmZmh1dGhxZXh5ZmJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MTI3NzksImV4cCI6MjA4ODM4ODc3OX0.rZTajagnrtmSW1LMYCwQobP5l57RNKzPDmEsN9eRtOk';
const supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadWorkflows() {
    const { data, error } = await supabase
        .from('workflows')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error('Error loading workflows:', error);
        return;
    }
    
    const grid = document.getElementById('workflowGrid');
    if (!data || data.length === 0) {
        grid.innerHTML = '<div class="empty-state"><h3>No workflows yet</h3><p>Be the first to upload!</p></div>';
        return;
    }
    
    grid.innerHTML = data.map(w => {
        const image = w.example_images && w.example_images[0] 
            ? `<img src="${w.example_images[0]}" class="card-image" alt="">` 
            : '<div class="card-no-image">🤖</div>';
        const rating = w.rating ? `<span class="rating">⭐ ${w.rating}</span>` : '';
        
        return `
            <a href="workflow.html?id=${w.id}" class="workflow-card" data-platform="${w.platform}" data-category="${w.category || ''}" data-price="${w.price}">
                ${image}
                <div class="card-content">
                    <div class="card-header">
                        <span class="platform-tag">${w.platform}</span>
                        <span class="price">$${w.price/100}</span>
                    </div>
                    <h3 class="card-title">${w.title}</h3>
                    <p class="card-desc">${w.description}</p>
                    <div class="card-footer">
                        <span class="seller-name">By Creator</span>
                        ${rating}
                    </div>
                </div>
            </a>
        `;
    }).join('');
}

// Search filter
document.getElementById('searchInput')?.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.workflow-card').forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const desc = card.querySelector('.card-desc').textContent.toLowerCase();
        card.style.display = (title.includes(term) || desc.includes(term)) ? 'block' : 'none';
    });
});

// Filter change listeners
document.getElementById('platformFilter')?.addEventListener('change', filterCards);
document.getElementById('categoryFilter')?.addEventListener('change', filterCards);
document.getElementById('priceFilter')?.addEventListener('change', filterCards);

function filterCards() {
    const platform = document.getElementById('platformFilter')?.value;
    const category = document.getElementById('categoryFilter')?.value;
    const price = document.getElementById('priceFilter')?.value;
    
    document.querySelectorAll('.workflow-card').forEach(card => {
        const cardPlatform = card.dataset.platform;
        const cardCategory = card.dataset.category;
        const cardPrice = parseInt(card.dataset.price);
        
        let show = true;
        if (platform && cardPlatform !== platform) show = false;
        if (category && cardCategory !== category) show = false;
        if (price) {
            const [min, max] = price.split('-').map(p => p === '100+' ? 10000 : parseInt(p));
            if (cardPrice < min * 100 || (max && cardPrice > max * 100)) show = false;
        }
        
        card.style.display = show ? 'block' : 'none';
    });
}

// Quick chips
document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
        chip.classList.toggle('active');
        const filter = chip.dataset.filter;
        // Apply quick filters
    });
});

document.addEventListener('DOMContentLoaded', loadWorkflows);