class LinkedList
{
    _head = null;

    head()
    {
        return this._head;
    }

    tail()
    {
        if (this._head === null) return null;

        let curr = this._head;
        while (curr.next != null)
        {
            curr = curr.next;
        }
        return curr;
    }

    size()
    {
        if (this._head === null) return 0;
        
        let curr = this._head;
        let counter = 0;
        while (curr != null)
        {
            curr = curr.next;
            counter++;
        }
        return counter;
    }

    append(value)
    {
        if (this._head === null)
        {
            this._head = new Node(value);
        }
        else
        {
            this.tail().next = new Node(value);
        }
    }

    prepend(value)
    {
        let newHead = new Node(value);
        newHead.next = this._head;
        this._head = newHead;
    }

    at(index)
    {
        if (index < 0) return null;
        let curr = this._head;
        for (let i = 0; i < index; i++)
        {
            curr = curr.next;
            if (curr === null) return null;
        }
        return curr;
    }

    pop()
    {
        if (this._head === null) return;

        let curr = this._head;
        let prev = null;
        while (curr.next != null)
        {
            prev = curr;
            curr = curr.next;
        }
        if (prev === null)
        {
            this._head = null;
        }
        else
        {
            prev.next = null;
        }
    }

    contains(value)
    {
        let curr = this._head;
        while (curr != null)
        {
            if (curr.value === value) return true;
            curr = curr.next;
        }
        return false;
    }

    find(value)
    {
        if (this._head === null) return null;

        let curr = this._head;
        let counter = 0;
        while (curr != null)
        {
            if (curr.value === value) return counter;
            curr = curr.next;
            counter++;
        }
        return null;
    }

    toString()
    {
        if (this._head === null) return "()";

        let curr = this._head;
        let output = '';
        while (curr != null)
        {
            output += `( ${curr.value} ) -> `;
            curr = curr.next;
        }
        output += 'null';
        return output;
    }

    insertAt(value, index)
    {
        if (index < 0) return;
        if (index === 0) this.prepend(value);
        
        let prev = this.at(index - 1);

        if (prev === null) return;

        let newNode = new Node(value);

        newNode.next = prev.next;
        prev.next = newNode;
    }

    removeAt(index)
    {
        if (index < 0) return;

        if (index === 0) this._head = this._head.next;

        let prev = this.at(index - 1);

        if (prev === null || prev.next === null) return;

        prev.next = prev.next.next;
    }
}

class Node
{
    value = null;
    next = null;

    constructor(val)
    {
        this.value = val;
    }
}