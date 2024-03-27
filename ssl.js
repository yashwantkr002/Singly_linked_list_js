class Node{
    constructor(data=null,next=null){
        this.data=data
        this.next=null
    }
}
class SSL{
    constructor(start=null){
        this.start=start
    }
    is_empty(){
        return this.start===null
    }
    insert_at_start(data){
        let n=new Node(data)
        n.next=this.start
        this.start=n
    }
    insert_at_last(data){
        let n=new Node(data)
        if(! this.is_empty()){
            let temp=this.start
            while(temp.next!==null){
                temp=temp.next
            }
            temp.next=n
        }
        else{
            this.start=n
        }
    }
    search_node(data){
        if(! this.is_empty()){
            let temp=this.start
            if(temp.next===null){
                if(temp.data==data){
                    return this.start
                }
                else{
                    return null
                }
            }
            else{
                if(temp.data==data){
                    return this.start
                }
                else{
                    while(temp.next.next!==null){
                        if(temp.next.data==data){
                            return temp
                            break
                        }
                        temp=temp.next
                    }
                    if(temp.next.data==data){
                        return temp
                    }
                    else{
                        return null
                    }
                }
                
            }

        }
        else{
            return null
        }
    }
    insert_before(node,data){
        let isNode=this.search_node(node)
        let n=new Node(data)
        if(isNode){
            if(isNode==this.start && isNode.data==node){
                n.next=isNode
                this.start=n
            }
            else{
                n.next=isNode.next
                isNode.next=n
            }
        }
        else{
            console.log("Invailed node")
        }
    }
    insert_after(node,data){
        let isNode=this.search_node(node)
        let n=new Node(data)
        if(isNode){
            if(isNode==this.start && isNode.data==node){
                n.next=this.start.next
                this.start.next=n
            }
            else{
                n.next=isNode.next.next
                isNode.next.next=n
            }
        }
        else{
            console.log("Invailed node")
        }
    }
    delet_first(){
        if(! this.is_empty()){
            this.start=this.start.next
        }
        else{
            console.log("index error")
        }
    }
    delet_last(){
        if(! this.is_empty()){
            let temp=this.start
            if(temp.next==null){
                this.start=null
            }
            else{
                while(temp.next.next!=null){
                    temp=temp.next
                }
                temp.next=null
            }
        }
        else{
            console.log("index error")
        }

    }
    delet_item(data){
        let isNode =this.search_node(data)
        if(isNode){
            if(isNode==this.start && isNode.data==data){
                this.start=this.start.next
            }
            else{
                isNode.next=isNode.next.next
            }

        }
        else{
            console.log("ivalide node")
        }
    }

    print(){
        let temp=this.start
        while(temp){
            console.log(temp.data)
            temp=temp.next
        }
    }
}

// driver tools
let s=new SSL()
s.insert_at_start(10)
s.insert_at_start(30)
s.insert_at_start(50)
s.insert_at_start(70)
s.insert_at_last(20)
console.log(s.search_node(10))
s.insert_before(30,100)
s.insert_after(50,60)
s.delet_first()
s.delet_last()
s.delet_item(30)
s.print()