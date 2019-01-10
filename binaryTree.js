// function Node(value) {
// 	this.value = value;
//   this.left = null;
//   this.right = null;
// }
//
// function BinaryTree() {
// 	this.root = null
// }
//
// BinaryTree.prototype.add = function(value) {
//   var n = new Node(value)
//   if(this.root === null){
//     this.root = n
//     return;
//   }
//   var current = this.root;
//   var parent ;
//   while(true){
//     parent = current;
//     if(value < current.value){
//       current = current.left;
//       if(current === null){
//         parent.left = n
//         break;
//       }
//     } else {
//       current = current.right;
//       if(current === null){
//         parent.right = n
//         break;
//       }
//     }
//   }
// }
// var arr = [7, 6, 5, 4, 8, 9]
// var tree = new BinaryTree()
// arr.forEach(value=>tree.add(value));
// console.log(tree)
