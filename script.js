const mealPlanData = [
    {
        day: "Sunday",
        breakfast: "Tea",
        lunch: "Chapo",
        dinner: "Chapo"
    },
    {
        day: "Monday",
        breakfast: "Chapo + Tea",
        lunch: "Githeri",
        dinner: "Rice"
    },
    {
        day: "Tuesday",
        breakfast: "Tea",
        lunch: "Spaghetti",
        dinner: "Ugali + Greens"
    },
    {
        day: "Wednesday",
        breakfast: "Tea",
        lunch: "Rice",
        dinner: "Mokimo"
    },
    {
        day: "Thursday",
        breakfast: "Tea",
        lunch: "Mokimo",
        dinner: "Rice"
    },
    {
        day: "Friday",
        breakfast: "Tea",
        lunch: "Rice",
        dinner: "Ugali + Greens"
    },
    {
        day: "Saturday",
        breakfast: "Tea",
        lunch: "Chapo",
        dinner: "Chapo"
    }
];

const mealPlanElement = document.getElementById('meal-plan');

// Generate meal plan content
mealPlanData.forEach((dayData, index) => {
    const dayContainer = document.createElement('div');
    dayContainer.className = 'day-container';
    
    // Create header
    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    dayHeader.textContent = dayData.day;
    dayHeader.onclick = () => toggleDay(index);
    
    // Create content
    const dayContent = document.createElement('div');
    dayContent.className = 'day-content';
    dayContent.id = `day-${index}`;
    
    // Today's highlight
    const today = new Date().getDay();
    if (index === today) {
        dayHeader.style.backgroundColor = '#901ed7';
        dayHeader.textContent += ' (Today)';
    }
    
    // Add meals
    const meals = ['breakfast', 'lunch', 'dinner'];
    const mealTitles = ['Breakfast', 'Lunch', 'Supper'];
    
    meals.forEach((meal, i) => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        
        const mealTitle = document.createElement('div');
        mealTitle.className = 'meal-title';
        mealTitle.textContent = mealTitles[i];
        
        const mealFood = document.createElement('div');
        mealFood.className = 'meal-food';
        mealFood.textContent = dayData[meal];
        
        mealDiv.appendChild(mealTitle);
        mealDiv.appendChild(mealFood);
        dayContent.appendChild(mealDiv);
    });
    
    dayContainer.appendChild(dayHeader);
    dayContainer.appendChild(dayContent);
    mealPlanElement.appendChild(dayContainer);
});

// Toggle day content
function toggleDay(index) {
    const dayContent = document.getElementById(`day-${index}`);
    dayContent.classList.toggle('active');
}

// Expand all days
document.getElementById('expand-all').addEventListener('click', () => {
    mealPlanData.forEach((_, index) => {
        const dayContent = document.getElementById(`day-${index}`);
        dayContent.classList.add('active');
    });
});

// Collapse all days
document.getElementById('collapse-all').addEventListener('click', () => {
    mealPlanData.forEach((_, index) => {
        const dayContent = document.getElementById(`day-${index}`);
        dayContent.classList.remove('active');
    });
});

// Show today by default
const today = new Date().getDay();
toggleDay(today);