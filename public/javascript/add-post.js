// const newPostSubmit= async function(event) {
//     console.log('didnt make it');
//     event.preventDefault()
//     console.log('made it');

//     const title = document.getElementById('post-title').value;
//     const content = document.getElementById('content').value;



    // const response = await fetch(`/api/posts/`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         title,
    //         content
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    // if (response.ok) {
    //     console.log('Post Success!')
    //     // document.location.replace('/dashboard');
    // } else {
    //     alert(response.statusText);
    // }
// }
// document.getElementById('submit-post').addEventListener('submit', newPostSubmit);



async function postSubmit (event) {
    console.log('no');
    event.preventDefault();
    console.log('yes');
    
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('content').value;

    const response = await fetch(`/api/posts/`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
document.getElementById('submit-post').addEventListener('submit', postSubmit);
