
async function run() {
  const res = await fetch('https://agaassociates.com');
  const html = await res.text();
  const { parseHTML } = await import('linkedom');
  const { document } = parseHTML(html);
  
  const menuEl = document.querySelector('#mainnav ul.menu');
  if (!menuEl) {
    console.log('No menu found');
    return;
  }

  function parseUl(ul) {
    const items = [];
    const lis = Array.from(ul.children).filter(c => c.tagName === 'LI');
    for (const li of lis) {
      const a = Array.from(li.children).find(c => c.tagName === 'A');
      if (!a) continue;
      const name = a.textContent.trim();
      let url = a.getAttribute('href') || '#';
      // Normalize url to relative if it belongs to agaassociates.com
      if (url.startsWith('https://agaassociates.com')) {
        url = url.replace('https://agaassociates.com', '') || '/';
      }
      const subUl = Array.from(li.children).find(c => c.tagName === 'UL');
      const item = {
        enable: true,
        name,
        url,
      };
      if (subUl) {
        item.hasChildren = true;
        item.children = parseUl(subUl);
      }
      items.push(item);
    }
    return items;
  }

  const menuData = parseUl(menuEl);
  console.log(JSON.stringify(menuData, null, 2));
}

run();
