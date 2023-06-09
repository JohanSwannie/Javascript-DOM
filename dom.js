const h1Array = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odio natus iste enim rem nulla repellat modi ullam, perspiciatis itaque sequi, culpa omnis nam tempora delectus cum? Illo, repudiandae aliquam.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex id molestiae dolores ab porro incidunt, deleniti exercitationem dolore, assumenda earum minus natus magni voluptatibus, tempore iusto libero laboriosam tempora similique!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt id nulla reiciendis dolorem aliquam voluptates exercitationem, perferendis aperiam autem hic eum ab eaque rem corporis sed vitae, velit nesciunt?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad qui nobis, unde minima sed voluptates quod, iure neque corrupti perspiciatis quia illo architecto, voluptatibus enim rem voluptate vitae a?",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea iure, odit quos molestiae excepturi tempora neque asperiores velit sint libero, consequuntur quaerat possimus perferendis. Numquam impedit perspiciatis ducimus consectetur cupiditate!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint similique ratione expedita repudiandae omnis eveniet nobis voluptas et quaerat laudantium, provident quibusdam eligendi modi minima, magni saepe tenetur incidunt.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque tenetur eius. Eum, minima dolore, voluptatibus possimus quaerat nostrum mollitia esse, sit numquam dolores neque saepe expedita exercitationem rerum ipsum?",
];

const cont = document.querySelector(".container");

let count = 0;

while (count < h1Array.length) {
  const h3text = document.createElement("h3");
  h3text.setAttribute("class", "bigger");
  h3text.setAttribute("id", "frame");
  h3text.textContent = h1Array[count];
  cont.appendChild(h3text);
  count++;
}

document.querySelectorAll(".bigger").forEach((biggy) => {
  biggy.style.backgroundColor = "peachpuff";
});
