# mongodb-example
This test program is used to establish testing replica set including:
- 2 mongodb members (at best use even number)
- 1 arbitor.  

# Environment setting

You need to modify settings in config/envinfo for your testing environment
- CONFPATH is the config path for mcmd  

- LOCAL_HOST is the ip of your computer (At best not use 127.0.0.1/localhost, something will happen)  
- LOCAL_PORTS is a list of different ports  
  
- DBPATH is the path where the database folder of the mongod servers will be  
  
- REPLICA_NAME is the name of replica set  
- REPLICA_MEMBERS is the port list of members of replica set  
- REPLICA_ARBITER is the port of arbitor  
  
- AUTH_USER is the user name
- AUTH_PASSWORD is the password
  
# Setup the test environment (install)  
Just run install, and it will help you to do below things
- 1. cp config/mcmd to ~/bin/, and then you can use mcmd tool 
- 2. cp config files to ~/.config/mongotest/, this will be used when mcmd is runnung  
  
# mcmd options
  
- start mongod (mcmd start)  
- start mongod with security option (mcmd start_s)  
- config mongod into replica set (mcmd config)
- stop mongod (mcmd stop)  
- status check (mcmd status)  
- login to primary (mcmd login)  
- show environment setting (mcmd env)

# Q&A

- 1. How to control mongodb when mongod is in security mode
-    You must config mongodb in normal mode first, stop them, and then run secure mode
