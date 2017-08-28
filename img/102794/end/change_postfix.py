import os
import sys


from sys import argv



try:
    from_postfix = argv[1]
    to_postfix = argv[2]
except:
    print "usage: python change_postfix.py from_type to_type"
    print "example: python change_postfix.py JPG jpg\n"
    sys.exit(0)


filelist = os.listdir('.')

for filename in filelist:
    new_filename = filename.replace(from_postfix, to_postfix)
    try:
        os.rename(filename,new_filename)
    except Exception,e:
        print e
        print 'Error 32 please close the folder or any opened file'