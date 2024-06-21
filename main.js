async function fetchAndDecode(url, type) {
  const response = await fetch(url);

  let content;

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    if (type === "blob") {
      content = await response.blob();
    } else if (type === "text") {
      content = await response.text();
    }

    return content;
  }
}

async function displayContent() {
  const coffee = fetchAndDecode("coffee.jpg", "blob");
  const tea = fetchAndDecode("tea.jpg", "blob");
  const description = fetchAndDecode("description.txt", "text");

  const values = await Promise.all([coffee, tea, description]);

  const objectURL1 = URL.createObjectURL(values[0]);
  const objectURL2 = URL.createObjectURL(values[1]);
  const descText = values[2];

  const image1 = document.createElement("img");
  const image2 = document.createElement("img");
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  const para = document.createElement("p");
  para.textContent = descText;
  document.body.appendChild(para);
}

displayContent().catch((e) => console.log(e));
