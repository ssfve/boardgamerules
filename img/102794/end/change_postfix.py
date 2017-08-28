import os
import sys


from sys import argv

import PIL
from PIL import Image
from exceptions import IOError



try:
    from_postfix = argv[1]
    to_postfix = argv[2]
except:
    print "usage: python change_postfix.py from_type to_type"
    print "example: python change_postfix.py JPG jpg\n"
    sys.exit(0)

#change name
filelist = os.listdir('.')

for filename in filelist:
    new_filename = filename.replace(from_postfix, to_postfix)
    try:
        os.rename(filename,new_filename)
    except Exception,e:
        print e
        print 'Error 32 please close the folder or any opened file'

filelist = os.listdir('.')
for filename in filelist:
    try:
        img = PIL.Image.open(filename)
        destination = filename
    except:
        print filename + " is not an image"
        continue

    try:
        img.save(destination, "JPEG", quality=80, optimize=True, progressive=True)
    except IOError:
        PIL.ImageFile.MAXBLOCK = img.size[0] * img.size[1]
        img.save(destination, "JPEG", quality=80, optimize=True, progressive=True)