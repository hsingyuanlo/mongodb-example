{MEMBERS}
{ARBITOR}

result=rs.initiate()
printjson(result)

sleep(5000)

for (i=0; i<members.length; i++) {
    result=rs.add(members[i])
    printjson(result)
}

result=rs.addArb(arbiter)
printjson(result)

sleep(1000)

db = db.getSiblingDB('admin')
db.addUser({ {ROOT_USER}, {ROOT_PASS}, roles:['userAdminAnyDatabase','dbAdminAnyDatabase','readWriteAnyDatabase', 'clusterAdmin'] })
