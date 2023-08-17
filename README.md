# dotbim.three.js

Test [dotbim](https://github.com/paireks/dotbim) with [three.js](https://github.com/mrdoob/three.js) using release version [r147](https://github.com/mrdoob/three.js/releases/tag/r147).

Here is an [Online Preview](https://htmlpreview.github.io/?https://github.com/ricaun/dotbim.three.js/blob/master/index.html) page where you can drop your BIM file. See the `Example` section below for additional info.

<a href="https://htmlpreview.github.io/?https://github.com/ricaun/dotbim.three.js/blob/master/index.html"><image src="images/preview.png" alt="Online Preview"></image></a>

## dotbim

Move and test colors for each face using in the mesh object.

### meshes
* mesh_id - `number`
* coordinates - `[x1,y1,z1,x2,y2,z2...]`
* indices - `[i1,i2,i3,j1,j2,j3...]`
* colors - `[ir,ig,ib,ia,jr,jg,jb,ja...]` (optional not oficial)

`colors` could have one default color or one color for each face `(indices.length / 3)`.

### elements
* mesh_id - `number`
* vector - `{x,y,z}` - `if undefined use {0,0,0}`
* rotation - `{qx,qy,qz,qw}` - `if undefined use {0,0,0,1}`
* color - `{r,g,b,a}` - `if undefined use colors default mesh`
* face_colors - `[ir,ig,ib,ia,jr,jg,jb,ja...]` `if undefined use colors default mesh`

In this example the color in the `element` is blending with the color in the mesh, `face_colors` and `color` from element are optional and in the mesh `colors` is optional (`colors` does not exist in the oficial [dotbim](https://github.com/paireks/dotbim) schema.)

## Example

The `index.html` has a simple implementation with the following features.

* Load `.bim` files using `Drag-and-Drop`
* Press Keyboard `1` - Dark Background
* Press Keyboard `2` - Light Background
* Press Keyboard `c` - Clear Scene
* Press Keyboard `n` - Create `dotbim_faces` sample
* Press Keyboard `m` - Create `dotbim_cubes` sample

## Usage

Download either `dotbim.three.js` or `dotbim.three.min.js` file. Use it directly in your browser application:

```js
<script src="./path-to-dotbim-file/dotbim.three.min.js"></script>
```

Then call the function `dotbim_CreateMeshes` to convert a `dotbim_text_content` to `THREE.Object3D` array as in the following example:

```js
dotbim_CreateMeshes(dotbim_text_content).forEach(bim_mesh => {
    scene.add(bim_mesh);
});
```

Or use the `THREE.FileLoader` function as in the following example:

```js
function loadBIM() {
  // previously created: var scene = new THREE.Scene(), mesh = new THREE.Object3D(), edges = new THREE.Group();
  // selected_bim_file in this case would represent an actual URL to the BIM model
  // for local file browsing it would have to be replaced with:
  //    URL.createObjectURL( selected_bim_file )
  // and eventually revoked with:
  //    URL.revokeObjectURL( selected_bim_file )

  new THREE.FileLoader().load( selected_bim_file, async function( text ) {

    let mesh_count = 1;

    // the following is the actual function from the dotbim.three.js file

    dotbim_CreateMeshes( text ).forEach( bim_mesh => {

      // name the mesh if required for any later code

      if (bim_mesh.name) {
        if (bim_mesh.name === '') {
          bim_mesh.name = 'mesh_' + mesh_count;
          mesh_count += 1;
        }
      } else {
        bim_mesh[ 'name' ] = 'mesh_' + mesh_count;
        mesh_count += 1;
      }

      // store the internally created edges if required

      if ( bim_mesh.edges ) edges.add( bim_mesh.edges );

      // add the bim_mesh to the model that will be displayed

      mesh.add( bim_mesh );
    });

    scene.add( mesh );
  });
}
```

Practical usage example can be seen in the [STEP Viewer](https://githubdragonfly.github.io/viewers/templates/STEP%20Viewer.html) with the code available in this [repository](https://github.com/GitHubDragonFly/GitHubDragonFly.github.io/tree/main/viewers/).

## License

This package is [licensed](LICENSE) under the [MIT Licence](https://en.wikipedia.org/wiki/MIT_License).

---

Do you like this package? Please [star this project on GitHub](../../stargazers)!

---

Copyright © ricaun 2023
