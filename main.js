const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");

// InitialValues
let leftList = [
    {id: "item1", checked: false, title: "PHP"},
    {id: "item2", checked: false, title: "Python"},
    {id: "item3", checked: false, title: "Ruby"},
    {id: "item4", checked: false, title: "C++"},
];
let rightList = [
    {id: "item5", checked: false, title: "HTML"},
    {id: "item6", checked: false, title: "Css"},
    {id: "item7", checked: false, title: "JavaScript"},
    {id: "item8", checked: false, title: "Java"},
];

renderDom(leftList, rightList);

// Render Dom
function renderDom(leftListToRender, rightListToRender) {
    leftListToRender.forEach((item) => {
        leftSide.innerHTML += `<div class="box">
        <input type="checkbox" class="input-box" id="${item.id}" />
        <label for="${item.id}">${item.title}</label>
        </div>`;
    });

    rightListToRender.forEach((item) => {
        rightSide.innerHTML += `<div class="box">
          <input type="checkbox" class="input-box" id="${item.id}" />
          <label for="${item.id}">${item.title}</label>
          </div>`;
    });

    registerEvents();
}

// Clear Dom
function clearDom() {
    document.querySelectorAll(".side").forEach((el) => {
        el.innerHTML = "";
    });
}

// Event
function registerEvents() {
    document.querySelector(".all-to-right").addEventListener("click", () => {
        const rightAllBtn = document.querySelector(".all-to-right");
        rightList = leftList.concat(rightList);
        leftList = [];
        clearDom();
        renderDom(leftList, rightList);
        const rightBtn = document.querySelector(".checked-to-right");
        const leftAllBtn = document.querySelector(".all-to-left");
        const leftBtn = document.querySelector(".checked-to-left");

        if (leftList.length === 0) {
            rightAllBtn.classList.add("disabled");
            rightBtn.classList.add("disabled");
            leftAllBtn.classList.remove("disabled");
            leftBtn.classList.remove("disabled");}



    });

    document.querySelector(".all-to-left").addEventListener("click", () => {
        const leftAllBtn = document.querySelector(".all-to-left");
        leftList = rightList.concat(leftList);
        rightList = [];
        clearDom();
        renderDom(leftList, rightList);

        const leftBtn = document.querySelector(".checked-to-left");
        const rightAllBtn = document.querySelector(".all-to-right");
        const rightBtn = document.querySelector(".checked-to-right");

        if (rightList.length === 0) {
            leftAllBtn.classList.add("disabled");
            leftBtn.classList.add("disabled");
            rightAllBtn.classList.remove("disabled");
            rightBtn.classList.remove("disabled");
        }


    });
    document.querySelector(".checked-to-left").addEventListener("click", () => {
        const checkedItems = document.querySelectorAll("input[type=checkbox]:checked");
        checkedItems.forEach((checkbox) => {
            for (let item of rightList) {
                if (checkbox.id === item.id) {
                    leftList.unshift(item);
                    let index = rightList.indexOf(item);
                    rightList.splice(index, 1);
                }
            }
        });
        clearDom();
        renderDom(leftList, rightList);
        const leftBtn = document.querySelector(".checked-to-left");
        const leftAllBtn = document.querySelector(".all-to-left");
        const rightBtn = document.querySelector(".checked-to-right");
        const rightAllBtn = document.querySelector(".all-to-right");
        if (rightList.length === 0) {
            leftBtn.classList.add("disabled");
            leftAllBtn.classList.add("disabled");
        }
        rightAllBtn.classList.remove("disabled");
        rightBtn.classList.remove("disabled");
    });

    document.querySelector(".checked-to-right").addEventListener("click", () => {
        const checkedItems = document.querySelectorAll("input[type=checkbox]:checked");
        checkedItems.forEach((checkbox) => {
            for (let item of leftList) {
                if (checkbox.id === item.id) {
                    rightList.unshift(item);
                    let index = leftList.indexOf(item);
                    leftList.splice(index, 1);
                }
            }
        });
        clearDom();
        renderDom(leftList, rightList);
        const leftBtn = document.querySelector(".checked-to-left");
        const leftAllBtn = document.querySelector(".all-to-left");
        const rightBtn = document.querySelector(".checked-to-right");
        const rightAllBtn = document.querySelector(".all-to-right");
        if (leftList.length === 0) {
            rightAllBtn.classList.add("disabled");
            rightBtn.classList.add("disabled");
        }
        leftBtn.classList.remove("disabled");
        leftAllBtn.classList.remove("disabled");
    });




}
