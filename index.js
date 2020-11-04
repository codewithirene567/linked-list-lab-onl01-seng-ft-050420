function getName(node){
    return node["name"]
}

function headNode(linkedList, collection){
    return collection[linkedList]
}

function next(head, collection){
    return collection[head["next"]]
}

function nodeAt(index, linkedList, collection){
    let node = collection[linkedList] // this is the first node represented
    //because collection contains all the nodes and linked list is the key for the head's value
    for(let i=0; i<index; i++){
        node = next(node, collection)
        //this is calling next however many times it takes to get to the provided index
        //then setting it equal to the node variable which is being returned in the end
    }
    return node
}

function addressAt(index, linkedList, collection){
    let node = collection[linkedList]
    if (index === 0){
        return linkedList
    }
    
    for(let i=1; i<index; i++){
       node= next(node,collection)
    }
    return node["next"]
}

function indexAt(givenNode, collection, linkedList){

    let node = collection[linkedList]//head
    for(let i=0; i<Object.keys(collection).length; i++){
        if (node === givenNode){
          
            return i
        }
        console.log(node + " " + givenNode)
        node= next(node, collection)
    }
    
    //from the start move with next until you get to the node requested
    //then pull the index and return it
}

 function insertNodeAt(index, newKey, linkedList, collection){
     //newKey is new key in the collection
     let node = collection[linkedList]//first head
     
     for(let i=0; i<index-1; i++){
         //index is just an integer so +1 and -1 will work
         node = next(node, collection)
         //every time a first position for an index is requested the next function does not need to be called

     }
    let nextNodeAddr= node["next"]//setting node property for the node that comes after the new node
     //storing the address of next pointer at the mailbox before the added new one
     node["next"] = newKey //newKey for where the new node is going to be in the collection

    collection[newKey]["next"] = nextNodeAddr 
    //now set the property
    return collection[linkedList]
    //return the collection
     //to return the whole linked list you return the head
 }

 function deleteNodeAt(index, linkedList, collection){
     let node = collection[linkedList]//head
     for(let i=0; i<index-1; i++){
        node= next(node, collection)
     }

    //  let afterAddr = node["next"]
     let deletedNode=next(node, collection)
     node["next"] =deletedNode["next"] //300
     return collection[linkedList]

     
    //need the node before it to point to the node after it
    //call next however many times to get to the right place
    //store the node before in a variable
    //
 }