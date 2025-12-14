# System Design Topics - Low Level & High Level Design

## High Level Design (HLD) Topics

### Scalability Concepts
- Load Balancing
- Horizontal vs Vertical Scaling
- Auto-scaling

### Caching Strategies
- Client-side Caching
- Server-side Caching
- CDN Caching
- Cache Invalidation
- Cache Eviction Policies

### Database Design
- SQL vs NoSQL
- Database Sharding
- Database Replication
- Database Partitioning
- Read Replicas

### Distributed Systems
- CAP Theorem
- Consistency Models
- Eventual Consistency
- Strong Consistency

### Message Queues & Async Processing
- Message Queue Systems
- Pub-Sub Pattern
- Event-Driven Architecture
- Task Queues

### Microservices Architecture
- Service Discovery
- API Gateway
- Inter-service Communication
- Service Mesh

### Storage Systems
- Object Storage
- Block Storage
- File Storage
- Blob Storage

### Network & Communication
- HTTP/HTTPS
- WebSockets
- gRPC
- REST vs GraphQL

### Reliability & Fault Tolerance
- Redundancy
- Failover Mechanisms
- Circuit Breaker Pattern
- Retry Logic
- Bulkhead Pattern

### Performance Optimization
- Rate Limiting
- Throttling
- Connection Pooling
- Lazy Loading

### Data Consistency
- ACID Properties
- BASE Properties
- Two-Phase Commit
- Saga Pattern

### Search & Indexing
- Full-text Search
- Inverted Indexes
- Search Ranking

### Real-time Systems
- WebSocket Architecture
- Server-Sent Events
- Long Polling

### Monitoring & Observability
- Logging
- Metrics
- Distributed Tracing
- Alerting

### Security
- Authentication
- Authorization
- OAuth/JWT
- API Security
- Rate Limiting for Security

### Advanced Distributed Concepts
- Consistent Hashing
- Distributed Locking
- Leader Election
- Consensus Algorithms
- Quorum-based Systems

---

## Low Level Design (LLD) Topics

### Object-Oriented Design Principles
- SOLID Principles
- Single Responsibility Principle
- Open/Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

### Design Patterns

#### Creational Patterns
- Singleton Pattern
- Factory Pattern
- Abstract Factory Pattern
- Builder Pattern
- Prototype Pattern

#### Structural Patterns
- Adapter Pattern
- Bridge Pattern
- Composite Pattern
- Decorator Pattern
- Facade Pattern
- Flyweight Pattern
- Proxy Pattern

#### Behavioral Patterns
- Chain of Responsibility
- Command Pattern
- Iterator Pattern
- Mediator Pattern
- Memento Pattern
- Observer Pattern
- State Pattern
- Strategy Pattern
- Template Method Pattern
- Visitor Pattern

### Class Design
- Class Relationships
- Association
- Aggregation
- Composition
- Inheritance vs Composition

### Interface Design
- Interface Segregation
- Dependency Injection
- Abstract Classes vs Interfaces

### Code Organization
- Package Structure
- Module Design
- Separation of Concerns

### Data Structures Implementation
- Custom Data Structures
- Thread-safe Collections
- Immutable Objects

### Concurrency & Threading
- Thread Safety
- Synchronization
- Locks and Monitors
- Thread Pools
- Executor Framework
- Concurrent Collections

### Error Handling
- Exception Hierarchy
- Custom Exceptions
- Error Propagation

### Testing Design
- Unit Testing
- Test-Driven Development
- Mocking and Stubbing
- Dependency Injection for Testing

### API Design (Code Level)
- Method Signatures
- Return Types
- Error Handling
- Versioning

### Database Schema Design
- Table Design
- Relationships (1:1, 1:N, N:M)
- Primary Keys
- Foreign Keys
- Indexes
- Normalization (1NF, 2NF, 3NF, BCNF)
- Denormalization

### Common LLD Problems
- Parking Lot System
- Library Management System
- ATM System
- Elevator System
- Hotel Booking System
- Restaurant Reservation System
- Online Shopping Cart
- Chat Application
- File System
- Cache Implementation (LRU, LFU)
- Rate Limiter
- Logging Framework
- Notification System
- Payment System
- Vending Machine
- Chess Game
- Tic-Tac-Toe Game
- Snake and Ladder Game
- Movie Ticket Booking System
- Ride-sharing System (Uber/Ola)
- Food Delivery System
- Social Media News Feed
- URL Shortener (Code Implementation)
- Thread-safe Singleton
- Producer-Consumer Problem
- Reader-Writer Problem
