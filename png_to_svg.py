import cv2
import numpy as np

img = cv2.imread('src/assets/Vertical-Logo-Fintrust Global-01.png', cv2.IMREAD_UNCHANGED)
alpha = img[:,:,3]
_, thresh = cv2.threshold(alpha, 1, 255, cv2.THRESH_BINARY)

contours, hierarchy = cv2.findContours(thresh, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_SIMPLE)

h, w = alpha.shape
svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="100%" height="100%">\n'

for i, contour in enumerate(contours):
    # Only draw contours that are not internal holes, or handle fill rules.
    # For a stroke outline, drawing all contours with fill="none" and stroke is perfect!
    epsilon = 0.001 * cv2.arcLength(contour, True)
    approx = cv2.approxPolyDP(contour, epsilon, True)
    
    if len(approx) > 2:
        path = "M "
        for pt in approx:
            path += f"{pt[0][0]},{pt[0][1]} L "
        path = path[:-3] + " Z"
        
        svg += f'  <path d="{path}" fill="none" stroke="currentColor" stroke-width="4" />\n'

svg += '</svg>'

with open('src/assets/logo.svg', 'w') as f:
    f.write(svg)

print("SVG generated successfully")
