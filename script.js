var images;


images = ['https://th.bing.com/th/id/R.7bf9ed120e74971e24d0f8f04576b329?rik=P4QAB7Rbso7JlQ&riu=http%3a%2f%2fwalldiskpaper.com%2fwp-content%2fuploads%2f2015%2f01%2fThe-Gunners-Logo-Arsenal-Wallpaper.gif&ehk=VSvbtzvGDVN2U4NP460e1mDsHtbtT9Jfayi17I2Pbh4%3d&risl=&pid=ImgRaw&r=0', 'https://i.pinimg.com/originals/5a/07/70/5a0770150315651a1818623e3a4866a5.jpg', 'https://d.ibtimes.co.uk/en/full/1551699/patrick-vieira.jpg', 'https://i.pinimg.com/736x/fd/e2/5c/fde25ccdba763bea211924b70ccaedb2---life-arsenal.jpg?b=t'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images[0]);
  images.shift();
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", images[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images[0]);
  images.pop();
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", images[0]);

});
