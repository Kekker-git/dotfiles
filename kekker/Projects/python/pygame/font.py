import pygame, sys
from pygame.locals import *

pygame.init()

# set the FPS
FPS = 60;
fpsClock = pygame.time.Clock();

# set the window
DISPLAYSURF = pygame.display.set_mode((1920, 1080))
pygame.display.set_caption('Hello World!')

# colors
GREEN = (0, 235, 96)

fontObj = pygame.font.Font('freesansbold.ttf', 32)
textSurfaceObj = fontObj.render("Hello world!", True, GREEN, (0, 0, 255))
textRectObj = textSurfaceObj.get_rect()
textRectObj.center = (800, 600)

# game loop
while True:
    DISPLAYSURF.fill(GREEN)
    DISPLAYSURF.blit(textSurfaceObj,  textRectObj)

    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()

    pygame.display.update()
