function homePage(params) {
  console.log("HOME");
  const div = document.createElement("div");
  div.classList.add("home-page_container");
  div.innerHTML = `
    <header-nav name="Juan Bautista" class="header" ></header-nav>
    <div>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui distinctio consectetur sequi, illum rerum neque aut eius ea possimus repudiandae veritatis vero, aliquid tenetur deserunt, commodi beatae temporibus quasi repellat eligendi quos! Aut modi animi similique consectetur fugiat natus commodi ducimus voluptatum temporibus distinctio autem quasi repellat, quas debitis eum eaque? Earum eum necessitatibus, architecto impedit ipsa assumenda quia dolorem! Est asperiores iste, vitae vero, laborum repudiandae incidunt sed delectus nihil eaque earum tempora. Sequi, placeat, vel non eum accusamus illo laboriosam voluptas corrupti praesentium consequuntur tempore quam temporibus officiis maiores nemo rerum velit voluptatibus quidem! Repellendus harum quae possimus!
    </div>
    `;
  const headerComp = div.querySelector(".header");
  console.log(headerComp);
  return div;
}

export { homePage };
