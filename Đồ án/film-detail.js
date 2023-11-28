// LOGIC PHẦN HIỂN THỊ NGÀY
let today = document.querySelector('#today')
let tomorrow = document.querySelector('#tomorrow')

const renderDate = function (_date) {
    return {
        month: _date.getMonth()+1,
        date: _date.getDate(),
        year: _date.getFullYear(),
        day: _date.getDay(),
    }
}

const toString = (dateObj, label) => {
    const DATES = {
        0: 'Chủ nhật',
        1: 'Thứ hai',
        2: 'Thứ ba',
        3: 'Thứ tư',
        4: 'Thứ năm',
        5: 'Thứ sáu',
        6: 'Thứ bảy'
    }
    
    return label ? `${label}, ${dateObj.date}/${dateObj.month}` : `${DATES[dateObj.day]}, ${dateObj.date}/${dateObj.month}`
}

const _today = new Date()
today.innerText = toString(renderDate(_today), 'Hôm nay')

let _tomorrow = new Date();
_tomorrow.setDate(_today.getDate() + 1);
tomorrow.innerText = toString(renderDate(_tomorrow))

// LOGIC PHẦN HIỂN THỊ GIỜ
const todayAvaibleShowingTimes = document.querySelectorAll('.lichieu-homnay:nth-child(2) .lichchieu-item')
const renderItems = () => {
    todayAvaibleShowingTimes.forEach(function (item) {
        const time = item.querySelector('p').innerText.split(':')
        const now = new Date()
        const hour = now.getHours()
        const minute = now.getMinutes()
        if ((hour > Number(time[0])) || (hour == Number(time[0]) && minute > Number(time[1]))) {
            item.classList.add('passed')
        } 
    })
}
setInterval(renderItems, 60000)
renderItems()

// LOGIC PHẦN COMMENTS
const COMMENTS = [
    {
        avatar: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/332571355_4823861531072197_7390252414501039187_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG0IAgV1pY2HcwyP3H3XtHuXh1-lknJKpVeHX6WSckqlfytsiK6SjfSaiorGsA-Mra0Tou91_6HE4x5BokDXTSN&_nc_ohc=OwAg92xy7LEAX8uOl7F&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCKrJSDlKo_ce_9jJd-liIfjw3uj04MVYO5speVPHzQ-g&oe=65636983",
        name: "Quỳnh Bò Biển",
        date: "02/11/2023",
        rating: 1,
        review: "Phim hay, coi ngủ không nhưng mà hay, 10 đỉm không có nhưng =))) Mọi người nên đi để xem nghe, không uổng tiền đâu.",
        likes: "10.9k",
        comments: "100"
    },
    {
        avatar: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/332571355_4823861531072197_7390252414501039187_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG0IAgV1pY2HcwyP3H3XtHuXh1-lknJKpVeHX6WSckqlfytsiK6SjfSaiorGsA-Mra0Tou91_6HE4x5BokDXTSN&_nc_ohc=OwAg92xy7LEAX8uOl7F&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCKrJSDlKo_ce_9jJd-liIfjw3uj04MVYO5speVPHzQ-g&oe=65636983",
        name: "Quỳnh Bò Biển",
        date: "02/11/2023",
        rating: 10,
        review: "Phim hay, coi ngủ không nhưng mà hay, 10 đỉm không có nhưng =))) Mọi người nên đi để xem nghe, không uổng tiền đâu.",
        likes: "10.9k",
        comments: "100"
    },
    {
        avatar: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/332571355_4823861531072197_7390252414501039187_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG0IAgV1pY2HcwyP3H3XtHuXh1-lknJKpVeHX6WSckqlfytsiK6SjfSaiorGsA-Mra0Tou91_6HE4x5BokDXTSN&_nc_ohc=OwAg92xy7LEAX8uOl7F&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCKrJSDlKo_ce_9jJd-liIfjw3uj04MVYO5speVPHzQ-g&oe=65636983",
        name: "Quỳnh Bò Biển",
        date: "02/11/2023",
        rating: 10,
        review: "Phim hay, coi ngủ không nhưng mà hay, 10 đỉm không có nhưng =))) Mọi người nên đi để xem nghe, không uổng tiền đâu.",
        likes: "10.9k",
        comments: "100"
    },
    {
        avatar: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/332571355_4823861531072197_7390252414501039187_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG0IAgV1pY2HcwyP3H3XtHuXh1-lknJKpVeHX6WSckqlfytsiK6SjfSaiorGsA-Mra0Tou91_6HE4x5BokDXTSN&_nc_ohc=OwAg92xy7LEAX8uOl7F&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCKrJSDlKo_ce_9jJd-liIfjw3uj04MVYO5speVPHzQ-g&oe=65636983",
        name: "Quỳnh Bò Biển",
        date: "02/11/2023",
        rating: 10,
        review: "Phim hay, coi ngủ không nhưng mà hay, 10 đỉm không có nhưng =))) Mọi người nên đi để xem nghe, không uổng tiền đâu.",
        likes: "10.9k",
        comments: "100"
    },
    {
        avatar: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/332571355_4823861531072197_7390252414501039187_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG0IAgV1pY2HcwyP3H3XtHuXh1-lknJKpVeHX6WSckqlfytsiK6SjfSaiorGsA-Mra0Tou91_6HE4x5BokDXTSN&_nc_ohc=OwAg92xy7LEAX8uOl7F&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCKrJSDlKo_ce_9jJd-liIfjw3uj04MVYO5speVPHzQ-g&oe=65636983",
        name: "Quỳnh Bò Biển",
        date: "02/11/2023",
        rating: 10,
        review: "Phim hay, coi ngủ không nhưng mà hay, 10 đỉm không có nhưng =))) Mọi người nên đi để xem nghe, không uổng tiền đâu.",
        likes: "10.9k",
        comments: "100"
    },
    {
        avatar: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/332571355_4823861531072197_7390252414501039187_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG0IAgV1pY2HcwyP3H3XtHuXh1-lknJKpVeHX6WSckqlfytsiK6SjfSaiorGsA-Mra0Tou91_6HE4x5BokDXTSN&_nc_ohc=OwAg92xy7LEAX8uOl7F&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCKrJSDlKo_ce_9jJd-liIfjw3uj04MVYO5speVPHzQ-g&oe=65636983",
        name: "Quỳnh Bò Biển",
        date: "02/11/2023",
        rating: 10,
        review: "Phim hay, coi ngủ không nhưng mà hay, 10 đỉm không có nhưng =))) Mọi người nên đi để xem nghe, không uổng tiền đâu.",
        likes: "10.9k",
        comments: "100"
    }
]

const commentsHolder = document.querySelector('.danhgia-body-wrapper')
const viewMoreBtn = document.querySelector('.xemthembinhluan')
const postCommentBtn = document.querySelector('.guibinhluan')

const authorAvatar = document.querySelector('.myself-danhgia .avt img')
const authorReview = document.querySelector('#comment-box')

const EMO = {
    1: 'Rất tệ!',
    8: 'Hay!',
    9: 'Xuất sắc!',
    10: 'Cực phẩm!'
}
let isViewMore = false

const renderComments = (comments) => {
    const commentsHTML = comments.map(comment => `
        <div class="danhgia-canhan-frame">
            <div class="avt-ten-ngay">
                <div class="avt">
                    <img src="${comment.avatar}" alt="">
                </div>
                <div class="ten-ngay">
                    <span class="ten">${comment.name}</span>
                    <span>${comment.date}</span>
                </div>
            </div>
            <div class="danhgia-canhan">
                <div class="starscore-canhan">
                    <i class="fa-solid fa-star" style="color: #f8d65a;"></i>
                    <p>${comment.rating}/10 ${EMO[comment.rating ?? '']}</p>
                </div>
                <p>${comment.review}</p>
            </div>
            <div class="icon-and-note">
                <div class="icon-danhgia">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-regular fa-paper-plane"></i>
                </div>
                <p class="note-icon">${comment.likes} tim, ${comment.comments} bình luận</p>
            </div>
        </div>
    `)

    commentsHolder.innerHTML = commentsHTML.join('')
}

viewMoreBtn.addEventListener('click', function () {
    isViewMore = !isViewMore
    if(isViewMore) {
        this.innerText = 'Ẩn bớt'
        renderComments(COMMENTS)
    } else {
        this.innerText = 'Xem thêm'
        renderComments(COMMENTS.slice(0, 3))
    }
})

postCommentBtn.addEventListener('click', function () {
    if (authorReview.value.trim() === '') return
    const todayDateObj = renderDate(_today)
    const newComment = {
        avatar: authorAvatar.src,
        name: "Quỳnh Bò Biển",
        date: `${todayDateObj.date}/${todayDateObj.month}/${todayDateObj.year}`,
        rating: 10,
        review: authorReview.value.trim(),
        likes: "0",
        comments: "0"
    }

    COMMENTS.unshift(newComment)
    authorReview.value = ''

    if (isViewMore) {
        renderComments(COMMENTS)
    } else {
        renderComments(COMMENTS.slice(0, 3))
    }
})

renderComments(COMMENTS.slice(0, 3))