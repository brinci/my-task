import cv2
path = r"c:\Users\Brinci NV\AppData\Local\Packages\Microsoft.ScreenSketch_8wekyb3d8bbwe\TempState\Recordings\20260801-0352-22.1889368.mp4"
cap = cv2.VideoCapture(path)
print('opened', cap.isOpened())
if cap.isOpened():
    print('frames', int(cap.get(cv2.CAP_PROP_FRAME_COUNT)))
    print('fps', cap.get(cv2.CAP_PROP_FPS))
    print('size', int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)), int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)))
    ret, frame = cap.read()
    print('first frame', ret, frame is not None)
    if ret:
        cv2.imwrite('reference_frame.png', frame)
        print('saved reference_frame.png')
