# mongodb-example
This test program is used to establish replica set including even number of members and 1 arbitor in single OS.  

# Environment setting

You need to modify settings in config/envinfo  
- LOCAL_HOST is the ip of your computer (At best not use 127.0.0.1/localhost, something will happen)  
- LOCAL_PORTS is a list of different ports  
  
- DBPATH is the path where the database folder of the mongod servers will be  
- CONFPATH is the config path for mcmd  
  
- REPLICA_NAME is the name of replica set  
- REPLICA_MEMBERS is the port list of members of replica set  
- REPLICA_ARBITER is the port of arbitor  
  
- AUTH_USER is the user name
- AUTH_PASSWORD is the password
  
# Setup the test environment (install)  
Just run install, and it will help you to do below things
- 1. cp config/mcmd to ~/bin/, and then you can use mcmd tool 
- 2. cp envinfo to ~/.config/mongotest/, this will be used when mcmd is runnung  
  
# mcmd options
  
* build db path and log path (mcmd build)  
  
* clean db path and log path (mcmd clean)  

* show current db directory (mcmd folder)
  
* start mongod (mcmd start)  
  
* start mongod with security option (mcmd start_s)  
  
* stop mongod (mcmd stop)  
  
* config mongod (mcmd config)  
  
* status check (mcmd status)  
  
* login to primary (mcmd login)  
 
* show environment setting (mcmd env)  

