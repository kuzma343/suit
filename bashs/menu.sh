#! /bin/bash
Menu(){
	echo -e "1. ansible\n2. wordpress\n3. zabbix\n"
	read choice
}
function ansible.yml(){
	playbook="ansible.yml"
}
function wordpress.yml(){
	playbook="wordpress.yml"
}
function zabbix.yml(){
	playbook="zabbix.yml"
}
clear
echo "hello"
Menu;
case $choice in
	1) ansible.yml; ;;
	2) wordpress.yml; ;;
	3) zabbix.yml; ;;
esac
cd /home/ubuntu/ansible/
read -p "Enter class: " class
echo $playbook
ansible-playbook -i $class /home/ubuntu/ansible/$playbook

