function change_orange(details) {
    details[`currentTarget`][`style`][`backgroundColor`] = `orange`;
}

let main_article = document.querySelector(`#main_article`);
main_article.addEventListener(`click`, change_orange);

function change_outer(details) {
    if(details[`target`][`outerHTML`].includes(`</h4>`) === true) {
        details[`target`][`outerHTML`] = `<p id="main_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto dolorem atque dignissimos labore earum fugit inventore quo sint. Soluta totam ratione consequuntur tempora, magnam vitae esse fugit in neque?</p>`;
    } else {
        details[`target`][`outerHTML`] = `<h4 id="main_content">The double click!</h4>`;
    }
    let main_content = document.querySelector(`#main_content`);
    main_content.addEventListener(`dblclick`, change_outer);
}

let main_content = document.querySelector(`#main_content`);
main_content.addEventListener(`dblclick`, change_outer);

function add_p_tags(details) {
    details[`target`].insertAdjacentHTML(`afterend`, `<p>1</p> <p>2</p> <p>3</p>`)
}

let main_image = document.querySelector(`#main_image`);
main_image.addEventListener(`mouseover`, add_p_tags);