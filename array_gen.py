#coding:utf-8

from sys import argv

filename = argv[1]
output_filename = filename.rstrip('.txt') + '.py'


with open(filename,'r') as f:
	lines = f.readlines()
	for line_no in range(len(lines)):
		line = lines[line_no].strip('\n')
		lines[line_no] = ("array[" + str(line_no) + "]='" + line + "';\n")

with open(output_filename,'w') as f:
	f.writelines(lines);