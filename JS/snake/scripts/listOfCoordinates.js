function Node(row, column) {
    this.row = row;
    this.column = column;
    this.next = null;
    this.previous = null;
}

function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

DoublyList.prototype.addToHead = function (row, column) {
    var node = new Node(row, column);

    if (this._length == 0) {
        this.head = node;
        this.tail = node;
    }
    else {
        var tempNode = this.head;
        this.head = node;
        this.head.previous = tempNode;
        tempNode.next = this.head;
    }

    this._length++;
}

DoublyList.prototype.drawElements = function () {
    var node = this.head;
    for (index = 0; index < this._length; index++) {
        var parent = document.getElementsByClassName(node.row);
        var div = parent[0].getElementsByClassName(node.column);
        div[0].classList.remove("noactive");
        div[0].classList.add("active");
        node = node.previous;
    }
}

DoublyList.prototype.deleteLast = function () {
    var parent = document.getElementsByClassName(this.tail.row);
    var div = parent[0].getElementsByClassName(this.tail.column);
    div[0].classList.remove("active");
    div[0].classList.add("noactive");
    this.tail = this.tail.next;
    this.tail.previous = null;
    this._length--;
}

DoublyList.prototype.haveElement = function (element) {
    var node = this.head.previous;
    for (var index=0; index<this._length-1; index++){
        if(node.row == element.row && node.column == element.column){
            return true;
        }
        node = node.previous;
    }
    return false;
}

