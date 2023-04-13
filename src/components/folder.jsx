

var paths = ["About.vue", "Categories/Index.vue", "Categories/Demo.vue", "Categories/Flavors.vue", "Categories/Types/Index.vue", "Categories/Types/Other.vue","Categories/Types/abc/router.vue","Categories/Types/abc/abcd/mno/react.vue","Categories/Types/abc/dist.vue","assets/image/docs/Text.txt","assets/image/docs/text23/text31/text51/Text.txt"];


function createTree(input){
  const result = input.reduce((r, p, i) => {
    if (!(p instanceof Object)){
      p = {path: p, id: i};
    }
    const path = p.path && p.path.substr(0,1) == "/"
                ? p.path
                : "/" + p.path;
    const [root, ...names] = path.split("/");
    const last = names[names.length - 1];
    names.reduce((q, name) => {
      let temp = q.find(o => o.name === name);
      const id = last == name ? p.id : undefined
      if (!temp) {
        q.push((temp = { id, name, children: [] }));
      }
      return temp.children;
    }, r);
    return r;
  }, []);
  console.log(result)
  return result;
}


let a = createTree(paths);




export default a
