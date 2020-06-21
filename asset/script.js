const MENUS_API = "https://pun-pun-pun.github.io/punpunroom/menu.json";

function codingNavRadio(json, prefix) {
    const result = document.createElement("nav");

    // nav ul
    const ul0 = document.createElement("ul");
    result.appendChild(ul0);

    // nav div
    const div0 = document.createElement("div");
    result.appendChild(div0);

    json.forEach(function (row0) {
        // nav div input
        const input0 = document.createElement("input");
        input0.setAttribute("id", prefix + "_" + row0.name);
        input0.setAttribute("type", "radio");
        input0.setAttribute("name", prefix);
        input0.setAttribute("value", row0.name);
        div0.appendChild(input0);

        // nav div ul
        const ul1 = document.createElement("ul");
        div0.appendChild(ul1);

        const rows1 = row0.child;

        rows1.forEach(function (row1) {
            // nav div ul li
            const li1 = document.createElement("li");
            ul1.appendChild(li1);

            const a1 = document.createElement("a");
            a1.innerHTML = row1.name;
            if (row1.href && row1.href.length > 0) {
                a1.href = row0.name + "/" + row1.href;
            }
            li1.appendChild(a1);
        });

        // nav ul li
        const li0 = document.createElement("li");
        ul0.appendChild(li0);

        // nav ul li label
        const lbl0 = document.createElement("label");
        lbl0.innerHTML = row0.name;
        lbl0.setAttribute("for", prefix + "_" + row0.name);
        li0.appendChild(lbl0);
    });
    return result;
}

function codingNavCheck(json, prefix) {
    const result = document.createElement("nav");

    // nav ul
    const ul0 = document.createElement("ul");
    result.appendChild(ul0);

    json.forEach(function (row0) {
        // nav ul li
        const li0 = document.createElement("li");
        ul0.appendChild(li0);

        // nav ul li label
        const lbl0 = document.createElement("label");
        lbl0.innerHTML = row0.name;
        lbl0.setAttribute("for", prefix + "_" + row0.name);
        li0.appendChild(lbl0);

        // nav ul li input
        const input0 = document.createElement("input");
        input0.setAttribute("id", prefix + "_" + row0.name);
        input0.setAttribute("type", "checkbox");
        input0.setAttribute("value", row0.name);
        li0.appendChild(input0);

        // nav ul li ul
        const ul1 = document.createElement("ul");
        li0.appendChild(ul1);

        const rows1 = row0.child;
        rows1.forEach(function (row1) {
            // nav ul li ul
            const li1 = document.createElement("li");
            ul1.appendChild(li1);

            // nav ul li ul a
            const a1 = document.createElement("a");
            a1.innerHTML = row1.name;
            if (row1.href && row1.href.length > 0) {
                a1.href = row0.name + "/" + row1.href;
            }
            li1.appendChild(a1);
        });
    });
    return result;
}
