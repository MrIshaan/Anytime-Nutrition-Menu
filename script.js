let menu_items = document.querySelectorAll(".menu a");

// for (let index = 0; index < menu_items.length; index++) {
//     console.log(menu_items[index]);
// }

function getId(id) {
    menu_items.forEach(element => {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        }
    });

    for (let index = 0; index < menu_items.length; index++) {
        // console.log(menu_items[index]);
        if (menu_items[index] == document.querySelector("#" + id)) {
            menu_items[index].classList.add("active");
        }
    }
}