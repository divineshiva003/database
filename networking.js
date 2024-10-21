const question = [
    {
        "question": "Which of the following is the protocol used to send emails?",
        "options": ["FTP", "HTTP", "SMTP", "SNMP"],
        "answer": "SMTP",
        "correct": 2
    },
    {
        "question": "What does the acronym LAN stand for?",
        "options": ["Local Area Network", "Large Area Network", "Light Access Node", "Long Area Network"],
        "answer": "Local Area Network",
        "correct": 0
    },
    {
        "question": "Which layer of the OSI model is responsible for routing packets?",
        "options": ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
        "answer": "Network Layer",
        "correct": 1
    },
    {
        "question": "Which device connects multiple networks together and routes packets?",
        "options": ["Switch", "Router", "Hub", "Bridge"],
        "answer": "Router",
        "correct": 1
    },
    {
        "question": "What is the default port number for HTTP?",
        "options": ["443", "22", "80", "21"],
        "answer": "80",
        "correct": 2
    },
    {
        "question": "Which of the following is a private IP address?",
        "options": ["192.168.1.1", "10.0.0.1", "172.32.0.1", "8.8.8.8"],
        "answer": "10.0.0.1",
        "correct": 1
    },
    {
        "question": "Which protocol is used for secure communication over the internet?",
        "options": ["FTP", "HTTPS", "TELNET", "SNMP"],
        "answer": "HTTPS",
        "correct": 1
    },
    {
        "question": "Which of the following is an application layer protocol?",
        "options": ["TCP", "HTTP", "IP", "ARP"],
        "answer": "HTTP",
        "correct": 1
    },
    {
        "question": "Which layer of the OSI model does the Ethernet protocol operate on?",
        "options": ["Network Layer", "Data Link Layer", "Transport Layer", "Application Layer"],
        "answer": "Data Link Layer",
        "correct": 1
    },
    {
        "question": "What does DHCP stand for?",
        "options": ["Dynamic Host Control Protocol", "Direct Host Configuration Protocol", "Dynamic Hypertext Control Protocol", "Dynamic Host Configuration Protocol"],
        "answer": "Dynamic Host Configuration Protocol",
        "correct": 3
    },
    {
        "question": "Which of the following IP address classes provides a maximum of 254 hosts per network?",
        "options": ["Class A", "Class C", "Class B", "Class D"],
        "answer": "Class C",
        "correct": 1
    },
    {
        "question": "What is the main function of the Transport Layer in the OSI model?",
        "options": ["Routing packets", "End-to-end communication and error recovery", "Data encryption", "File transfer"],
        "answer": "End-to-end communication and error recovery",
        "correct": 1
    },
    {
        "question": "Which protocol is used to resolve IP addresses to MAC addresses?",
        "options": ["RARP", "ARP", "DHCP", "DNS"],
        "answer": "ARP",
        "correct": 1
    },
    {
        "question": "Which type of DNS record is used to map hostnames to IP addresses?",
        "options": ["A record", "MX record", "CNAME record", "TXT record"],
        "answer": "A record",
        "correct": 0
    },
    {
        "question": "What is the purpose of a subnet mask?",
        "options": ["To divide the network into smaller parts", "To determine the network and host portions of an IP address", "To encrypt data", "To speed up data transmission"],
        "answer": "To determine the network and host portions of an IP address",
        "correct": 1
    },
    {
        "question": "Which protocol is used to monitor and manage network devices?",
        "options": ["HTTP", "FTP", "SNMP", "SMTP"],
        "answer": "SNMP",
        "correct": 2
    },
    {
        "question": "Which of the following describes a VPN?",
        "options": ["A protocol for secure web browsing", "A type of virus protection", "A secure private network over the internet", "A method of compressing data"],
        "answer": "A secure private network over the internet",
        "correct": 2
    },
    {
        "question": "What is the range of well-known port numbers?",
        "options": ["1024-49151", "0-1023", "49152-65535", "1-65535"],
        "answer": "0-1023",
        "correct": 1
    },
    {
        "question": "Which command is used to view network connections on a Windows machine?",
        "options": ["ipconfig", "ifconfig", "netstat", "ping"],
        "answer": "netstat",
        "correct": 2
    },
    {
        "question": "Which layer of the OSI model is responsible for data compression?",
        "options": ["Presentation Layer", "Transport Layer", "Network Layer", "Data Link Layer"],
        "answer": "Presentation Layer",
        "correct": 0
    },
    {
        "question": "Which protocol does the ping command use?",
        "options": ["TCP", "ICMP", "UDP", "SNMP"],
        "answer": "ICMP",
        "correct": 1
    },
    {
        "question": "What is the maximum size of an IPv4 packet?",
        "options": ["32 KB", "65,535 bytes", "128 KB", "1500 bytes"],
        "answer": "65,535 bytes",
        "correct": 1
    },
    {
        "question": "Which routing protocol uses the Dijkstra algorithm?",
        "options": ["RIP", "OSPF", "BGP", "EIGRP"],
        "answer": "OSPF",
        "correct": 1
    },
    {
        "question": "What is the primary purpose of NAT (Network Address Translation)?",
        "options": ["To hide the internal network structure", "To map private IP addresses to public IP addresses", "To secure network communication", "To create multiple subnets"],
        "answer": "To map private IP addresses to public IP addresses",
        "correct": 1
    },
    {
        "question": "Which of the following protocols is used for sending error messages and operational information?",
        "options": ["SMTP", "ICMP", "FTP", "TCP"],
        "answer": "ICMP",
        "correct": 1
    },
    {
        "question": "What is the main advantage of using IPv6 over IPv4?",
        "options": ["Faster data transmission", "Enhanced security features", "Larger address space", "Improved routing efficiency"],
        "answer": "Larger address space",
        "correct": 2
    },
    {
        "question": "Which of the following is a link state routing protocol?",
        "options": ["OSPF", "RIP", "BGP", "EIGRP"],
        "answer": "OSPF",
        "correct": 0
    },
    {
        "question": "What is the function of a proxy server?",
        "options": ["To act as an intermediary between a client and a server", "To provide secure VPN connections", "To encrypt data packets", "To manage DNS requests"],
        "answer": "To act as an intermediary between a client and a server",
        "correct": 0
    },
    {
        "question": "What is the purpose of the BGP (Border Gateway Protocol)?",
        "options": ["To route packets within an autonomous system", "To exchange routing information between different autonomous systems", "To provide end-to-end connectivity", "To manage network congestion"],
        "answer": "To exchange routing information between different autonomous systems",
        "correct": 1
    },
    {
        "question": "Which of the following best describes the term 'congestion control'?",
        "options": ["A mechanism to control data flow in a network to prevent congestion", "A technique to enhance data compression", "A method for encrypting data during transmission", "A process for managing IP address assignments"],
        "answer": "A mechanism to control data flow in a network to prevent congestion",
        "correct": 0
    }
]
