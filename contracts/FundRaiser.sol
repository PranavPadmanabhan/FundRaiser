// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract FundRaiser {
    enum CampaignState {
        STARTED,
        COMPLETED
    }

    // MODIFIERS

    modifier onlyAuthorized(uint256 campaignId) {
        require(
            s_campaigns[campaignId].creator == msg.sender,
            "Not Authorized"
        );
        _;
    }

    // EVENTS

    event NewCampaign(string name, uint256 target, address creator);
    event NewDonation(uint256 amount, uint256 donatedAt, address donator);
    event Withdraw(uint256 campaignId, uint256 amount);
    event Cancelled(uint256 campaignId);

    // STRUCTS

    struct Campaign {
        uint256 id;
        string name;
        string description;
        string image;
        uint256 target;
        uint256 balance;
        uint deadline;
        address creator;
        CampaignState state;
    }

    struct Donations {
        uint256 amount;
        uint256 donatedAt;
        address donator;
    }

    // STATE VARIABLES

    Campaign[] private s_campaigns;
    mapping(uint256 => Donations[]) private s_donationsOf;

    function createCampaign(
        string memory _name,
        string memory description,
        uint256 _target,
        string memory img,
        uint deadLine
    ) public {
        s_campaigns.push(
            Campaign(
                s_campaigns.length,
                _name,
                description,
                img,
                _target,
                0,
                deadLine,
                msg.sender,
                CampaignState.STARTED
            )
        );
        emit NewCampaign(_name, _target, msg.sender);
    }

    function donate(uint256 campaignId) public payable {
        require(
            s_campaigns[campaignId].state != CampaignState.COMPLETED,
            "campaign is not available"
        );
        require(msg.value >= 0.0001 ether, "minimum amount required");
        s_donationsOf[campaignId].push(
            Donations(msg.value, block.timestamp, msg.sender)
        );
        s_campaigns[campaignId].balance += msg.value;
        if (s_campaigns[campaignId].balance == s_campaigns[campaignId].target) {
            s_campaigns[campaignId].state = CampaignState.COMPLETED;
        }
        emit NewDonation(msg.value, block.timestamp, msg.sender);
    }

    function withdrawFunds(uint256 campaignId)
        public
        onlyAuthorized(campaignId)
    {
        require(
            s_campaigns[campaignId].state == CampaignState.COMPLETED,
            "campaign is not completed"
        );
        (bool success, ) = payable(msg.sender).call{
            value: s_campaigns[campaignId].balance
        }("");
        s_campaigns[campaignId].balance = 0;
        require(success, "failed");
        emit Withdraw(campaignId, s_campaigns[campaignId].balance);
    }

    function cancelCampaign(uint256 campaignId)
        public
        onlyAuthorized(campaignId)
    {
        s_campaigns[campaignId].state = CampaignState.COMPLETED;
        emit Cancelled(campaignId);
    }

    // VIEW FUNCTIONS

    function getCampaigns() public view returns (Campaign[] memory) {
        return s_campaigns;
    }

    function getCampaign(uint256 campaignId)
        public
        view
        returns (Campaign memory)
    {
        return s_campaigns[campaignId];
    }

    function getDonations(uint256 campaignId)
        public
        view
        returns (Donations[] memory)
    {
        return s_donationsOf[campaignId];
    }
}
