class Node{
    constructor(data, next) {
        this.data=data;
        this.next=next||null;
    }
}

class LinkList{
    constructor(){
        this.size=0;
        this.head=null;
    }
    // 向链表中追加元素
    appendChild(data){
        let node=new Node(data);
        if(!this.head){
            this.head=node;
        }else {
            let element = this.getElementFromIndex(this.size);
            element.next=node;
        }
        this.size++;

    }
    // 向链表中插入元素
    insertInto(index,data){
        if(index>0 && index<this.size+2){
            let insertedEle=new Node(data);
            let aimEle=this.getElementFromIndex(index-1);
            insertedEle.next=aimEle.next;
            aimEle.next=insertedEle;
            this.size++;
        }

    }
    // 向链表中删除元素
    deleteElement(data){
        // 先查找到，再删除
        let aimIndex=this.searchIndex(data);
        if(aimIndex==1){
            this.head=this.head.next;
            // 这种情况就不需要free了
        }else if(aimIndex>1){
            let ele=this.getElementFromIndex(aimIndex-1);
            let freeEle=ele.next;
            ele.next=ele.next.next;
            freeEle=null;
        }else {
            return
        }
        this.size--;
    };
    // 查找
    searchIndex(data){
        let ele=this.head;
        for(let i=1;i<=this.size;i++){
            if(ele.data===data){
                return i;
            }else {
                ele=ele.next;
            }
        }
        return false;
    };
    // 一个重要的方法  --> 搜索执针的作用
    getElementFromIndex(index){
        let element=this.head;
        if(index>this.size || index<1){
            return null;
        }else {
            // 这个是计数用的for循环
            for(let i=1;i<index;i++){
                // 没有通过引用修改什么东西，只是修改了应用的指向
                element = element.next;
            }
        }
        return element;
    }



}
let lList=new LinkList();
lList.appendChild(1);
lList.appendChild(3);
lList.appendChild(4);
lList.appendChild(5);
lList.insertInto(0,111)
lList.deleteElement(5)
console.dir(lList,{depth: 100})
console.log(lList.searchIndex(1112))





