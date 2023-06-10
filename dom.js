const h1Array = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odio natus iste enim rem nulla repellat modi ullam, perspiciatis itaque sequi, culpa omnis nam tempora delectus cum? Illo, repudiandae aliquam.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex id molestiae dolores ab porro incidunt, deleniti exercitationem dolore, assumenda earum minus natus magni voluptatibus, tempore iusto libero laboriosam tempora similique!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt id nulla reiciendis dolorem aliquam voluptates exercitationem, perferendis aperiam autem hic eum ab eaque rem corporis sed vitae, velit nesciunt?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad qui nobis, unde minima sed voluptates quod, iure neque corrupti perspiciatis quia illo architecto, voluptatibus enim rem voluptate vitae a?",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea iure, odit quos molestiae excepturi tempora neque asperiores velit sint libero, consequuntur quaerat possimus perferendis. Numquam impedit perspiciatis ducimus consectetur cupiditate!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint similique ratione expedita repudiandae omnis eveniet nobis voluptas et quaerat laudantium, provident quibusdam eligendi modi minima, magni saepe tenetur incidunt.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque tenetur eius. Eum, minima dolore, voluptatibus possimus quaerat nostrum mollitia esse, sit numquam dolores neque saepe expedita exercitationem rerum ipsum?",
];

const imageSource = [
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg",
  "https://europeansting.files.wordpress.com/2020/04/animals.jpeg",
  "https://worldanimalfoundation.org/wp-content/uploads/2023/02/amur-Review.jpeg",
  "https://img.huffingtonpost.com/asset/637f6a142500005c003718d9.jpeg?ops=scalefit_720_noupscale",
  "https://www.animalsaroundtheglobe.com/wp-content/uploads/2022/02/tiger.jpg",
  "https://cdn11.bigcommerce.com/s-v5lcc6/product_images/uploaded_images/bio-a-bio-e-1-img1h.jpeg",
  "https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/B2D7F958-EE3C-45DB-A5BB-482B693830C4.jpeg.optimal.jpeg",
];

const cont = document.querySelector(".container");

let count = 0;

while (count < h1Array.length) {
  const extradiv = document.createElement("div");
  extradiv.classList.add("combination");
  const h3text = document.createElement("h3");
  h3text.setAttribute("class", "bigger");
  h3text.setAttribute("id", "frame");
  h3text.textContent = h1Array[count];
  const image = document.createElement("img");
  if (count === 0) {
  }
  image.src = imageSource[count];
  image.style.width = "150px";
  image.style.height = "100px";
  extradiv.appendChild(h3text);
  extradiv.appendChild(image);
  cont.appendChild(extradiv);
  count++;
}

document.querySelectorAll(".bigger").forEach((biggy) => {
  biggy.style.backgroundColor = "peachpuff";
});
