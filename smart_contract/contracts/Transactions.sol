//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    //event is like function and inside we wil pass arguments
    event Transfer(
        address from,
        address reciever,
        uint256 amount,
        string keyword
    );

    //it is kind of like object and we are defining what our object will have
    struct TransferStruct {
        address sender;
        address reciever;
        uint256 amount;
        string keyword;
    }

    //define array of diff trans
    TransferStruct[] transactions;

    //this tells our transactions is going to be a arrayu of type TransferStruct

    function addToBlockchain(
        address payable receiver,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1;
        transactions.push(
            TransferStruct(msg.sender, receiver, amount, keyword)
        );
        emit Transfer(msg.sender, receiver, amount, keyword);
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        //return transactions
    }

    function getTransactionCount() public view returns (uint256) {
        //return transaction count
    }
}
