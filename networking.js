const mongoose = require("mongoose");

main().then(() => {
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/clang");
}

const userSchema = new mongoose.Schema({
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    c_option: String
});
const q_a = mongoose.model("QandA", userSchema);

q_a.insertMany([
    {question: "Which of the following is the protocol used to send emails?", option1: "(a) FTP", option2: "(b) HTTP", option3: "(c) SMTP", option4: "(d) SNMP", c_option: "(c) SMTP"},
    {question: "What does the acronym LAN stand for?", option1: "(a) Local Area Network", option2: "(b) Large Area Network", option3: "(c) Light Access Node", option4: "(d) Long Area Network", c_option: "(a) Local Area Network"},
    {question: "Which layer of the OSI model is responsible for routing packets?", option1: "(a) Data Link Layer", option2: "(b) Network Layer", option3: "(c) Transport Layer", option4: "(d) Session Layer", c_option: "(b) Network Layer"},
    {question: "Which device connects multiple networks together and routes packets?", option1: "(a) Switch", option2: "(b) Router", option3: "(c) Hub", option4: "(d) Bridge", c_option: "(b) Router"},
    {question: "What is the default port number for HTTP?", option1: "(a) 443", option2: "(b) 22", option3: "(c) 80", option4: "(d) 21", c_option: "(c) 80"},
    {question: "Which of the following is a private IP address?", option1: "(a) 192.168.1.1", option2: "(b) 10.0.0.1", option3: "(c) 172.32.0.1", option4: "(d) 8.8.8.8", c_option: "(b) 10.0.0.1"},
    {question: "Which protocol is used for secure communication over the internet?", option1: "(a) FTP", option2: "(b) HTTPS", option3: "(c) TELNET", option4: "(d) SNMP", c_option: "(b) HTTPS"},
    {question: "Which of the following is an application layer protocol?", option1: "(a) TCP", option2: "(b) HTTP", option3: "(c) IP", option4: "(d) ARP", c_option: "(b) HTTP"},
    {question: "Which layer of the OSI model does the Ethernet protocol operate on?", option1: "(a) Network Layer", option2: "(b) Data Link Layer", option3: "(c) Transport Layer", option4: "(d) Application Layer", c_option: "(b) Data Link Layer"},
    {question: "What does DHCP stand for?", option1: "(a) Dynamic Host Control Protocol", option2: "(b) Direct Host Configuration Protocol", option3: "(c) Dynamic Hypertext Control Protocol", option4: "(d) Dynamic Host Configuration Protocol", c_option: "(d) Dynamic Host Configuration Protocol"},
    {question: "Which of the following IP address classes provides a maximum of 254 hosts per network?", option1: "(a) Class A", option2: "(b) Class C", option3: "(c) Class B", option4: "(d) Class D", c_option: "(b) Class C"},
    {question: "What is the main function of the Transport Layer in the OSI model?", option1: "(a) Routing packets", option2: "(b) End-to-end communication and error recovery", option3: "(c) Data encryption", option4: "(d) File transfer", c_option: "(b) End-to-end communication and error recovery"},
    {question: "Which protocol is used to resolve IP addresses to MAC addresses?", option1: "(a) RARP", option2: "(b) ARP", option3: "(c) DHCP", option4: "(d) DNS", c_option: "(b) ARP"},
    {question: "Which type of DNS record is used to map hostnames to IP addresses?", option1: "(a) A record", option2: "(b) MX record", option3: "(c) CNAME record", option4: "(d) TXT record", c_option: "(a) A record"},
    {question: "What is the purpose of a subnet mask?", option1: "(a) To divide the network into smaller parts", option2: "(b) To determine the network and host portions of an IP address", option3: "(c) To encrypt data", option4: "(d) To speed up data transmission", c_option: "(b) To determine the network and host portions of an IP address"},
    {question: "Which protocol is used to monitor and manage network devices?", option1: "(a) HTTP", option2: "(b) FTP", option3: "(c) SNMP", option4: "(d) SMTP", c_option: "(c) SNMP"},
    {question: "Which of the following describes a VPN?", option1: "(a) A protocol for secure web browsing", option2: "(b) A type of virus protection", option3: "(c) A secure private network over the internet", option4: "(d) A method of compressing data", c_option: "(c) A secure private network over the internet"},
    {question: "What is the range of well-known port numbers?", option1: "(a) 102449151", option2: "(b) 01023", option3: "(c) 4915265535", option4: "(d) 165535", c_option: "(b) 01023"},
    {question: "Which command is used to view network connections on a Windows machine?", option1: "(a) ipconfig", option2: "(b) ifconfig", option3: "(c) netstat", option4: "(d) ping", c_option: "(c) netstat"},
    {question: "Which layer of the OSI model is responsible for data compression?", option1: "(a) Presentation Layer", option2: "(b) Transport Layer", option3: "(c) Network Layer", option4: "(d) Data Link Layer", c_option: "(a) Presentation Layer"},
    {question: "Which protocol does the ping command use?", option1: "(a) TCP", option2: "(b) ICMP", option3: "(c) UDP", option4: "(d) SNMP", c_option: "(b) ICMP"},
    {question: "What is the maximum size of an IPv4 packet?", option1: "(a) 32 KB", option2: "(b) 65,535 bytes", option3: "(c) 128 KB", option4: "(d) 1500 bytes", c_option: "(b) 65,535 bytes"},
    {question: "Which routing protocol uses the Dijkstra algorithm?", option1: "(a) RIP", option2: "(b) OSPF", option3: "(c) BGP", option4: "(d) EIGRP", c_option: "(b) OSPF"},
    {question: "What is the primary purpose of NAT (Network Address Translation)?", option1: "(a) To hide the internal network structure", option2: "(b) To map private IP addresses to public IP addresses", option3: "(c) To secure network communication", option4: "(d) To create multiple subnets", c_option: "(b) To map private IP addresses to public IP addresses"},
    {question: "Which of the following protocols is used for sending error messages and operational information?", option1: "(a) SMTP", option2: "(b) ICMP", option3: "(c) FTP", option4: "(d) TCP", c_option: "(b) ICMP"},
    {question: "What is the main advantage of using IPv6 over IPv4?", option1: "(a) Faster data transmission", option2: "(b) Enhanced security features", option3: "(c) Larger address space", option4: "(d) Improved routing efficiency", c_option: "(c) Larger address space"},
    {question: "Which of the following is a link state routing protocol?", option1: "(a) OSPF", option2: "(b) RIP", option3: "(c) BGP", option4: "(d) EIGRP", c_option: "(a) OSPF"},
    {question: "What is the function of a proxy server?", option1: "(a) To act as an intermediary between a client and a server", option2: "(b) To provide secure VPN connections", option3: "(c) To encrypt data packets", option4: "(d) To manage DNS requests", c_option: "(a) To act as an intermediary between a client and a server"},
    {question: "What is the purpose of the BGP (Border Gateway Protocol)?", option1: "(a) To route packets within an autonomous system", option2: "(b) To exchange routing information between different autonomous systems", option3: "(c) To provide end-to-end connectivity", option4: "(d) To manage network congestion", c_option: "(b) To exchange routing information between different autonomous systems"},
    {question: "Which of the following best describes the term 'congestion control'?", option1: "(a) A mechanism to control data flow in a network to prevent congestion", option2: "(b) A technique to enhance data compression", option3: "(c) A method for encrypting data during transmission", option4: "(d) A process for managing IP address assignments", c_option: "(a) A mechanism to control data flow in a network to prevent congestion"},

]).then((res) =>{
    console.log(res);
});
// {question: "", option1: "", option2: "", option3: "", option4: "", c_option: ""},
//     {question: "", option1: "", option2: "", option3: "", option4: "", c_option: ""},
//     {question: "", option1: "", option2: "", option3: "", option4: "", c_option: ""},
