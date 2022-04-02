/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//  function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     if (!head?.next) {
//         return null;
//     }

//     let slow: ListNode | null, fast: ListNode | null;
//     slow = fast = head;

//     for (let i = 0; i < n && fast; i++) {
//         fast = fast.next;
//     }

//     if (!fast) {
//         return head.next;
//     }

//     while (slow && fast?.next) {
//         slow = slow.next;
//         fast = fast.next;
//     }

//     if (slow && slow.next) slow.next = slow.next.next;

//     return head;
// }
