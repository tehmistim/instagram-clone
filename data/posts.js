import { USERS } from './users';

export const POSTS = [
    {
        imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/271292895_1111462289682842_672673377485718482_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=aKMAWv1GpIkAX9pSIP0&_nc_oc=AQkRKsk0JtAQG7-pkserdeKIo2zmNSuyCD6yGFhZsjCWu88t-bwr9PKxQoIHp2-kcPo&tn=-FCt_LVt8uzw5SV5&_nc_ht=scontent-atl3-1.xx&oh=00_AT8oCk1B0F01TC7CA1i1BPe9lxnACr6JUlDGie0_NFzzrg&oe=61DAF6A3',
        user: USERS[0].user,
        likes: 440,
        caption: 'My brother never wants to sit still!  #huskylife #cantsitstill #hyper',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'waggybutt2',
                comment: 'I may have marked that earlier!'
            },
            {
                user: 'shelledlee',
                comment: 'I marked that yesterday!'
            },
        ],
    },
    {
        imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/271232461_1111462596349478_1234782829872096700_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=wTi6Uhx0-3MAX9yPuE7&_nc_ht=scontent-atl3-1.xx&oh=00_AT8NDO0zCI6UM3b4Zph043yleqQOaLO6mRYU3w4Ce52Wuw&oe=61DA0BF7',
        user: USERS[2].user,
        likes: 210,
        caption: 'Can you believe we all have a twin, lol. #twizies',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'katiyashot',
                comment: 'I wonder if I have a twin?'
            },
            {
                user: 'Teracane',
                comment: 'There are too many of you silly guys to keep up with.'
            },
            {
                user: 'waggybutt2',
                comment: 'Double trouble!'
            },
            {
                user: 'mommabella',
                comment: 'My kids are so beautiful. 🥰🥰🥰 #proudmomma'
            },
        ],
    },
    {
        imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/266715094_1097859414376463_5726942724049947060_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=a2HY4_ZA8xMAX-p_QGr&_nc_ht=scontent-atl3-1.xx&oh=00_AT8VqxcDrMqmPmVsL4Ys-GMLDVNtJ0imFwmRXAfEv5A1mQ&oe=61DA7DAA',
        user: USERS[2].user,
        likes: 307,
        caption: 'I mean we were cute babies!',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'beautow',
                comment: `OMG how could you post this, I'm embarrassed fr fr.`
            },
            {
                user: 'Teracane',
                comment: `Awww sha, y'all sooooooo cute!`
            },
            {
                user: 'mommabella',
                comment: '😍 I remember this photo! '
            },
        ],
    },
]