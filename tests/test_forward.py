import sys
from pathlib import Path
import torch

# Ensure project root is on sys.path
sys.path.append(str(Path(__file__).resolve().parents[1]))

from net import Net


def test_forward_shape():
    model = Net()
    x = torch.randn(1, 4)
    output = model(x)
    assert output.shape == (1, 2)
