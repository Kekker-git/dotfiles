import matplotlib.pyplot as plt
import numpy as np

x = [66.4, 67.7, 68.0, 68.0, 68.3, 68.4, 68.6, 68.8, 68.9, 69.0, 69.1, \
     69.2, 69.3, 69.3, 69.5, 69.5, 69.6, 69.7, 69.8, 69.8, 69.9, 70.0, \
     70.0, 70.1, 70.2, 70.3, 70.3, 70.4, 70.5, 70.6, 70.6, 70.8, 70.9, \
     71.0, 71.1, 71.2, 71.3, 71.3, 71.5, 71.6, 71.6, 71.7, 71.8, 71.8, \
     71.9, 72.1, 72.2, 72.3, 72.4, 72.6, 72.7, 72.9, 73.1, 73.3, 73.5, \
     74.2, 74.5, 75.3]

plt.hist(x, 10, normed=1)
plt.title("Histogram prepared by Calvin Williams")
plt.xlabel("Tensile Strength (thousand PSI)")
plt.ylabel("Density")
plt.show()