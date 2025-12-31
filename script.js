// Tab 切換功能
function showTab(tabName) {
    // 隱藏所有 tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // 移除所有 tab 按鈕的 active 狀態
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // 顯示選中的 tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// 每日行程資料（精簡版）
const dayData = {
    1: {
        title: 'Day 1 | 2/26 抵達',
        activities: [
            '19:20 抵達DFW→租車',
            '20:00 至住宿1555 Elm St',
            '21:00 Tom Thumb超市採買'
        ],
        budget: 'NTD 500'
    },
    2: {
        title: 'Day 2 | 2/27 科學館',
        activities: [
            '12:00 City Hall Bistro午餐',
            '13:30 Perot科學博物館<br>恐龍化石、太空艙',
            '18:00 The Woolworth晚餐'
        ],
        budget: 'NTD 2,200'
    },
    3: {
        title: 'Day 3 | 2/28 水族館',
        activities: [
            '12:00 Partenope義式午餐',
            '13:30 Dallas World Aquarium<br>熱帶雨林、鯊魚隧道',
            '18:30 Tei Tei日式串燒'
        ],
        budget: 'NTD 2,700'
    },
    4: {
        title: '🏀 Day 4 | 3/1 NBA',
        activities: [
            '12:00 外送午餐',
            '15:00 航空博物館<br>NASA太空艙、火箭',
            '<strong>19:00 🏀 NBA賽事</strong><br>Mavericks vs Thunder<br>American Airlines Center'
        ],
        budget: 'NTD 5,200',
        isNBA: true
    },
    5: {
        title: 'Day 5 | 3/2 →Austin',
        activities: [
            '11:00 Dallas退房',
            '12:30 Waco Magnolia Market<br>園區參觀+午餐',
            '17:00 抵達Austin入住'
        ],
        budget: 'NTD 1,500'
    },
    6: {
        title: 'Day 6 | 3/3 →SA',
        activities: [
            '11:00 Austin退房',
            '12:00 San Marcos Outlets購物',
            '16:00 Pearl District逛街<br>17:00 SA入住'
        ],
        budget: 'NTD 1,500'
    },
    7: {
        title: 'Day 7 | 3/4 河濱步道',
        activities: [
            '12:00 Rainforest Cafe',
            '13:30 River Walk散步<br>La Villita藝術村',
            '18:00 Pharm Table晚餐'
        ],
        budget: 'NTD 2,000'
    },
    8: {
        title: 'Day 8 | 3/5 返程',
        activities: [
            '10:00 SA退房',
            '11:30 Pinballz彈珠台',
            '14:00 Grapevine Outlets<br>19:30 往機場',
            '<strong>22:50 ✈️ 返台</strong>'
        ],
        budget: 'NTD 1,800'
    }
};

// 顯示特定天的詳細行程
function showDay(day) {
    const data = dayData[day];
    const container = document.getElementById('day-details');
    
    // 更新所有 day 按鈕狀態
    document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    let html = `
        <div class="day-detail-compact ${data.isNBA ? 'nba-card' : ''}">
            <div class="day-title">${data.title}</div>
            <div class="activities-compact">
    `;
    
    data.activities.forEach((activity, index) => {
        html += `
            <div class="activity-compact ${data.isNBA && index === 2 ? 'nba-activity' : ''}">
                ${activity}
            </div>
        `;
    });
    
    html += `
            </div>
            <div class="budget-tag">${data.budget}</div>
        </div>
    `;
    
    container.innerHTML = html;
}

// 頁面載入時顯示 Day 1
document.addEventListener('DOMContentLoaded', function() {
    const firstDayBtn = document.querySelector('.day-btn');
    if (firstDayBtn) {
        firstDayBtn.classList.add('active');
        showDay(1);
    }
});
