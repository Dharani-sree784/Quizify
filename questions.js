const quizData = [
  {
    "semester": "Semester I",
    "code": "26CSPC101",
    "name": "Cryptography and Network Security",
    "topics": "Security principles, classical ciphers, DES, AES, RSA, digital signatures, authentication, firewalls, VPN and IPsec",
    "questions": [
      [
        "Which security principle ensures that data is accessible to authorized users when needed?",
        [
          "Confidentiality",
          "Integrity",
          "Availability",
          "Authentication"
        ],
        2,
        "Availability ensures reliable access to information and services."
      ],
      [
        "Which cryptographic system uses the same key for encryption and decryption?",
        [
          "Asymmetric key",
          "Symmetric key",
          "Hashing",
          "Digital signature"
        ],
        1,
        "Symmetric cryptography uses one shared secret key."
      ],
      [
        "Which algorithm is an asymmetric cryptographic algorithm?",
        [
          "AES",
          "DES",
          "Blowfish",
          "RSA"
        ],
        3,
        "RSA uses a public key and a private key."
      ],
      [
        "What is the main purpose of a digital signature?",
        [
          "Compress data",
          "Verify authenticity and integrity",
          "Increase network speed",
          "Hide an IP address"
        ],
        1,
        "A digital signature helps verify the sender and detect message changes."
      ],
      [
        "Which device filters network traffic according to security rules?",
        [
          "Compiler",
          "Firewall",
          "Load balancer",
          "DNS resolver"
        ],
        1,
        "A firewall permits or blocks traffic based on configured rules."
      ]
    ]
  },
  {
    "semester": "Semester I",
    "code": "24CSPC102",
    "name": "Advanced Python Programming",
    "topics": "Python data types, files, regular expressions, OOP, exceptions, NumPy, SciPy, SymPy, Pandas and Matplotlib",
    "questions": [
      [
        "Which Python collection stores key-value pairs?",
        [
          "List",
          "Tuple",
          "Dictionary",
          "Set"
        ],
        2,
        "A dictionary stores data as key-value pairs."
      ],
      [
        "Which method reads the entire contents of a text file?",
        [
          "read()",
          "write()",
          "close()",
          "seek()"
        ],
        0,
        "The read() method returns the file contents."
      ],
      [
        "Which special method acts as a constructor in a Python class?",
        [
          "__start__()",
          "__init__()",
          "__create__()",
          "__main__()"
        ],
        1,
        "Python calls __init__() when a new object is initialized."
      ],
      [
        "Which library is commonly used for multidimensional arrays?",
        [
          "Matplotlib",
          "NumPy",
          "Pickle",
          "glob"
        ],
        1,
        "NumPy provides efficient multidimensional array objects."
      ],
      [
        "Which Pandas structure is two-dimensional and labeled?",
        [
          "Series",
          "DataFrame",
          "ndarray",
          "Tuple"
        ],
        1,
        "A DataFrame is a two-dimensional labeled data structure."
      ]
    ]
  },
  {
    "semester": "Semester I",
    "code": "23CSPC103",
    "name": "Design and Analysis of Algorithms",
    "topics": "Algorithm analysis, trees, priority queues, divide and conquer, greedy method, dynamic programming, backtracking and branch and bound",
    "questions": [
      [
        "What does time complexity measure?",
        [
          "Memory used only",
          "Execution time growth with input size",
          "Number of variables",
          "Program file size"
        ],
        1,
        "Time complexity describes how running time grows as input size increases."
      ],
      [
        "Which technique repeatedly divides a problem into smaller subproblems?",
        [
          "Greedy",
          "Backtracking",
          "Divide and conquer",
          "Branch and bound"
        ],
        2,
        "Divide and conquer splits, solves and combines subproblems."
      ],
      [
        "Which algorithm finds a minimum spanning tree using edge selection?",
        [
          "Binary search",
          "Kruskal's algorithm",
          "Merge sort",
          "BFS"
        ],
        1,
        "Kruskal's algorithm selects edges in increasing weight order while avoiding cycles."
      ],
      [
        "Which design technique stores solutions to overlapping subproblems?",
        [
          "Dynamic programming",
          "Linear search",
          "Selection sort",
          "Depth-first search"
        ],
        0,
        "Dynamic programming reuses stored subproblem results."
      ],
      [
        "The N-Queens problem is commonly solved using which technique?",
        [
          "Hashing",
          "Backtracking",
          "Prim's algorithm",
          "Binary search"
        ],
        1,
        "Backtracking explores placements and abandons invalid partial solutions."
      ]
    ]
  },
  {
    "semester": "Semester I",
    "code": "26CSPC104",
    "name": "Distributed Operating System",
    "topics": "Distributed systems, message passing, RPC, distributed shared memory, synchronization, deadlocks, resource management, file systems and naming",
    "questions": [
      [
        "What is the primary goal of a distributed operating system?",
        [
          "Run only one process",
          "Coordinate resources across multiple computers",
          "Replace all networks",
          "Store images only"
        ],
        1,
        "A distributed OS coordinates resources and processes across connected machines."
      ],
      [
        "RPC stands for what?",
        [
          "Remote Procedure Call",
          "Rapid Program Control",
          "Random Process Communication",
          "Remote Port Connection"
        ],
        0,
        "RPC allows a program to invoke a procedure on another computer."
      ],
      [
        "Which mechanism allows processes to exchange data through messages?",
        [
          "Message passing",
          "Paging",
          "Spooling",
          "Fragmentation"
        ],
        0,
        "Message passing is an inter-process communication mechanism."
      ],
      [
        "Which is a necessary condition for deadlock?",
        [
          "Preemption always allowed",
          "Circular wait",
          "No resource sharing",
          "Single instruction"
        ],
        1,
        "Circular wait is one of the four necessary Coffman conditions."
      ],
      [
        "What does load balancing aim to do?",
        [
          "Distribute workload across resources",
          "Encrypt every file",
          "Stop all processes",
          "Remove network protocols"
        ],
        0,
        "Load balancing spreads work to improve resource utilization and performance."
      ]
    ]
  },
  {
    "semester": "Semester I",
    "code": "26CSPC105",
    "name": "Database Management Systems",
    "topics": "DBMS architecture, ER model, SQL, joins, views, normalization, transactions, PL/SQL cursors, exceptions, procedures, packages and security",
    "questions": [
      [
        "Which model represents entities and relationships?",
        [
          "ER model",
          "Network packet model",
          "Waterfall model",
          "Queue model"
        ],
        0,
        "The Entity-Relationship model represents entities, attributes and relationships."
      ],
      [
        "Which SQL command is used to retrieve rows?",
        [
          "INSERT",
          "UPDATE",
          "SELECT",
          "DROP"
        ],
        2,
        "SELECT retrieves data from one or more tables."
      ],
      [
        "Which normal form removes partial functional dependency?",
        [
          "1NF",
          "2NF",
          "3NF",
          "BCNF"
        ],
        1,
        "Second Normal Form removes partial dependencies on a candidate key."
      ],
      [
        "Which SQL statement removes a user's object privilege?",
        [
          "GRANT",
          "REVOKE",
          "COMMIT",
          "ROLLBACK"
        ],
        1,
        "REVOKE withdraws previously granted privileges."
      ],
      [
        "Which PL/SQL construct handles runtime errors?",
        [
          "Cursor",
          "Exception handler",
          "Trigger",
          "View"
        ],
        1,
        "Exception handling responds to runtime errors in PL/SQL."
      ]
    ]
  },
  {
    "semester": "Semester I",
    "code": "23CSPCP01",
    "name": "Design of Algorithms Lab using Python",
    "topics": "Elementary data structures, divide and conquer, greedy, dynamic programming, traversal, backtracking and branch and bound",
    "questions": [
      [
        "Which Python structure is suitable for implementing a stack?",
        [
          "list",
          "set",
          "dict keys",
          "float"
        ],
        0,
        "A list supports append() and pop() for stack operations."
      ],
      [
        "Which search technique explores a graph level by level?",
        [
          "DFS",
          "BFS",
          "Quick sort",
          "Binary search"
        ],
        1,
        "Breadth-first search visits vertices in increasing distance from the source."
      ],
      [
        "Which algorithm is commonly used for merge sort implementation?",
        [
          "Greedy",
          "Divide and conquer",
          "Backtracking",
          "Branch and bound"
        ],
        1,
        "Merge sort divides the array, sorts each half and merges the results."
      ],
      [
        "Which Python module provides a queue-based priority queue?",
        [
          "math",
          "heapq",
          "random",
          "re"
        ],
        1,
        "heapq implements a min-heap priority queue."
      ],
      [
        "Which technique is used to explore candidate solutions and undo invalid choices?",
        [
          "Backtracking",
          "Hashing",
          "Indexing",
          "Pipelining"
        ],
        0,
        "Backtracking abandons a partial candidate when it cannot lead to a valid solution."
      ]
    ]
  },
  {
    "semester": "Semester I",
    "code": "23CSPSP01",
    "name": "DBMS Lab",
    "topics": "SQL table management, aggregate functions, set operations, ER implementation, views, PL/SQL functions, procedures, cursors, packages and exceptions",
    "questions": [
      [
        "Which SQL function counts rows?",
        [
          "SUM()",
          "COUNT()",
          "AVG()",
          "ROUND()"
        ],
        1,
        "COUNT() returns the number of rows or non-NULL values, depending on its argument."
      ],
      [
        "Which clause filters grouped results?",
        [
          "WHERE",
          "ORDER BY",
          "HAVING",
          "DISTINCT"
        ],
        2,
        "HAVING applies conditions to groups after GROUP BY."
      ],
      [
        "Which SQL command creates a view?",
        [
          "CREATE VIEW",
          "MAKE VIEW",
          "ADD VIEW",
          "INSERT VIEW"
        ],
        0,
        "CREATE VIEW defines a virtual table based on a query."
      ],
      [
        "Which PL/SQL unit can accept parameters and return a value?",
        [
          "Function",
          "Package only",
          "Cursor attribute",
          "Table"
        ],
        0,
        "A function can accept parameters and return a value."
      ],
      [
        "Which cursor is declared and controlled explicitly by the programmer?",
        [
          "Implicit cursor",
          "Explicit cursor",
          "System cursor",
          "Static view"
        ],
        1,
        "An explicit cursor is declared and managed using cursor statements."
      ]
    ]
  },
  {
    "semester": "Semester II",
    "code": "23CSPC206",
    "name": "Advanced Java Programming",
    "topics": "Inheritance, interfaces, multithreading, synchronization, AWT, event handling, layout managers, servlets and JDBC",
    "questions": [
      [
        "Which keyword is used to inherit a class in Java?",
        [
          "implements",
          "extends",
          "inherits",
          "super"
        ],
        1,
        "The extends keyword creates a subclass."
      ],
      [
        "Which method begins execution of a Java thread?",
        [
          "run()",
          "start()",
          "execute()",
          "init()"
        ],
        1,
        "start() schedules a new thread and then invokes run()."
      ],
      [
        "Which package contains AWT components?",
        [
          "java.io",
          "java.awt",
          "java.net",
          "java.sql"
        ],
        1,
        "The java.awt package contains Abstract Window Toolkit components."
      ],
      [
        "What does JDBC provide?",
        [
          "Database connectivity",
          "Image compression",
          "Thread scheduling",
          "File encryption"
        ],
        0,
        "JDBC is the Java API for connecting to and querying databases."
      ],
      [
        "Which method is central to a servlet's request handling?",
        [
          "paint()",
          "service()",
          "finalize()",
          "compareTo()"
        ],
        1,
        "The servlet container calls service() to process client requests."
      ]
    ]
  },
  {
    "semester": "Semester II",
    "code": "23CSPC207",
    "name": "Digital Image Processing",
    "topics": "Image fundamentals, sampling, quantization, intensity transformations, histogram, spatial filtering, restoration, compression and segmentation",
    "questions": [
      [
        "What is image sampling?",
        [
          "Converting continuous coordinates into discrete coordinates",
          "Increasing file size",
          "Removing all pixels",
          "Encrypting an image"
        ],
        0,
        "Sampling discretizes the spatial coordinates of an image."
      ],
      [
        "What does histogram equalization improve?",
        [
          "Image contrast",
          "File naming",
          "Network speed",
          "Audio quality"
        ],
        0,
        "Histogram equalization redistributes intensity values to improve contrast."
      ],
      [
        "Which filter is commonly used to reduce smoothing noise?",
        [
          "Smoothing filter",
          "Sharpening filter",
          "Edge detector",
          "High-boost filter"
        ],
        0,
        "Smoothing filters suppress noise and small intensity variations."
      ],
      [
        "Which method is a lossless compression technique?",
        [
          "Huffman coding",
          "Low-pass filtering",
          "Thresholding",
          "Image sharpening"
        ],
        0,
        "Huffman coding is a lossless entropy coding method."
      ],
      [
        "Which technique separates an image into meaningful regions?",
        [
          "Segmentation",
          "Quantization",
          "Sampling",
          "Encoding"
        ],
        0,
        "Image segmentation partitions an image into meaningful regions or objects."
      ]
    ]
  },
  {
    "semester": "Semester II",
    "code": "25CSPC208",
    "name": "Principles of Compiler Design",
    "topics": "Compiler phases, lexical analysis, syntax analysis, parsing, syntax-directed translation, intermediate code, optimization and code generation",
    "questions": [
      [
        "Which compiler phase converts characters into tokens?",
        [
          "Lexical analysis",
          "Code generation",
          "Optimization",
          "Linking"
        ],
        0,
        "The lexical analyzer groups character sequences into tokens."
      ],
      [
        "Which structure is commonly used to represent a program's syntax?",
        [
          "Parse tree",
          "Hash table only",
          "Queue",
          "Bitmap"
        ],
        0,
        "A parse tree represents the grammatical structure of the input."
      ],
      [
        "Which parser constructs a parse from the start symbol toward the input?",
        [
          "Top-down parser",
          "Bottom-up parser",
          "Lexical scanner",
          "Code optimizer"
        ],
        0,
        "Top-down parsing begins with the start symbol and expands productions."
      ],
      [
        "What is the purpose of intermediate code?",
        [
          "Provide a machine-independent representation",
          "Store user passwords",
          "Render graphics",
          "Manage network packets"
        ],
        0,
        "Intermediate representation separates front-end analysis from target code generation."
      ],
      [
        "Which compiler phase improves code without changing its meaning?",
        [
          "Optimization",
          "Lexical analysis",
          "Tokenization",
          "Scanning"
        ],
        0,
        "Optimization improves efficiency while preserving program semantics."
      ]
    ]
  },
  {
    "semester": "Semester II",
    "code": "26CSPE211",
    "name": "Software Project Management",
    "topics": "Project planning, estimation, scheduling, risk, quality, teams, leadership, communication and project control",
    "questions": [
      [
        "What is the main purpose of project planning?",
        [
          "Define activities, resources and schedule",
          "Write source code only",
          "Remove testing",
          "Avoid documentation"
        ],
        0,
        "Planning defines how project objectives will be achieved."
      ],
      [
        "Which chart is commonly used to display project schedule activities over time?",
        [
          "Gantt chart",
          "Pie chart",
          "ER diagram",
          "Histogram"
        ],
        0,
        "A Gantt chart displays tasks against a timeline."
      ],
      [
        "What is risk management concerned with?",
        [
          "Identifying and responding to uncertain events",
          "Deleting project files",
          "Choosing font styles",
          "Only hiring developers"
        ],
        0,
        "Risk management identifies, analyzes and plans responses to project risks."
      ],
      [
        "Which estimation technique uses expert judgment and repeated rounds of feedback?",
        [
          "Delphi technique",
          "Binary search",
          "Bubble sort",
          "Round robin"
        ],
        0,
        "The Delphi technique gathers and refines expert estimates iteratively."
      ],
      [
        "What does project scope define?",
        [
          "Work included in the project",
          "Only project budget",
          "Only team attendance",
          "Hardware brand"
        ],
        0,
        "Scope describes the work and deliverables included in the project."
      ]
    ]
  },
  {
    "semester": "Semester II",
    "code": "23CSPE221",
    "name": "Cloud Computing and its Applications",
    "topics": "Cloud foundations, characteristics, deployment models, service models, architecture, storage, Hadoop and web collaboration tools",
    "questions": [
      [
        "Which cloud service model provides ready-to-use software over the internet?",
        [
          "IaaS",
          "PaaS",
          "SaaS",
          "LAN"
        ],
        2,
        "SaaS delivers complete applications to end users."
      ],
      [
        "Which deployment model is dedicated to one organization?",
        [
          "Public cloud",
          "Private cloud",
          "Community internet",
          "Open web"
        ],
        1,
        "A private cloud is provisioned for exclusive use by one organization."
      ],
      [
        "What does cloud elasticity mean?",
        [
          "Resources can scale with demand",
          "Data is always public",
          "Servers cannot change",
          "No network is needed"
        ],
        0,
        "Elasticity allows resources to expand or shrink as workloads change."
      ],
      [
        "Which technology is associated with distributed big-data processing?",
        [
          "Apache Hadoop",
          "AWT",
          "JDBC",
          "CSS"
        ],
        0,
        "Hadoop supports distributed storage and processing of large datasets."
      ],
      [
        "Which service model gives customers a platform to deploy applications?",
        [
          "PaaS",
          "SaaS",
          "IaaS",
          "SMTP"
        ],
        0,
        "PaaS provides a managed platform and runtime for application deployment."
      ]
    ]
  },
  {
    "semester": "Semester II",
    "code": "23CSPE231",
    "name": "Internet of Things",
    "topics": "IoT technologies, frameworks, architectures, sensors, protocols, UML, testing, AI, analytics, machine learning and IoT security",
    "questions": [
      [
        "Which component senses physical conditions in an IoT system?",
        [
          "Sensor",
          "Compiler",
          "Firewall rule",
          "Web browser"
        ],
        0,
        "Sensors measure physical properties such as temperature or motion."
      ],
      [
        "What does an IoT gateway commonly do?",
        [
          "Connects devices and networks",
          "Compiles Java code",
          "Prints documents",
          "Edits images"
        ],
        0,
        "A gateway connects IoT devices to other networks or cloud services."
      ],
      [
        "Which protocol is commonly used for lightweight publish-subscribe messaging?",
        [
          "MQTT",
          "FTP",
          "SMTP",
          "POP3"
        ],
        0,
        "MQTT is a lightweight publish-subscribe messaging protocol used in IoT."
      ],
      [
        "What is a DDoS attack?",
        [
          "Flooding a target from multiple sources",
          "Encrypting a single file",
          "Updating device firmware",
          "Measuring temperature"
        ],
        0,
        "A distributed denial-of-service attack overwhelms a target using many sources."
      ],
      [
        "Why are firmware updates important for IoT security?",
        [
          "They can fix vulnerabilities",
          "They disable all sensors",
          "They remove networking",
          "They replace encryption with passwords"
        ],
        0,
        "Updates often patch security flaws and improve device reliability."
      ]
    ]
  },
  {
    "semester": "Semester II",
    "code": "24CSPS202",
    "name": "Advanced Multiskill Development Course",
    "topics": "Communication, grammar, general awareness, verbal reasoning, numerical aptitude, research methodology, algorithmic research, report writing and LaTeX",
    "questions": [
      [
        "Choose the correct question tag: 'She is a student, ____?'",
        [
          "is she?",
          "isn't she?",
          "does she?",
          "wasn't she?"
        ],
        1,
        "A positive statement with 'is' takes the negative tag 'isn't she?'."
      ],
      [
        "If 20% of a number is 50, what is the number?",
        [
          "100",
          "150",
          "200",
          "250"
        ],
        3,
        "Let the number be x. 0.20x = 50, so x = 250."
      ],
      [
        "Which reasoning method draws a general rule from specific observations?",
        [
          "Inductive reasoning",
          "Deductive reasoning",
          "Random guessing",
          "Data encryption"
        ],
        0,
        "Inductive reasoning moves from specific observations toward a general conclusion."
      ],
      [
        "What is the first major step in a research process?",
        [
          "Identify the research problem",
          "Print the final report",
          "Prepare references",
          "Present findings"
        ],
        0,
        "Research begins by identifying and defining the problem."
      ],
      [
        "Which LaTeX command starts a document body?",
        [
          "\\begin{document}",
          "\\start{body}",
          "\\document{begin}",
          "\\body{}"
        ],
        0,
        "The document environment begins with \\begin{document}."
      ]
    ]
  }
];
